import React, { useState, useEffect } from 'react';
// code from: https://www.emgoto.com/react-table-of-contents/

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);
  
    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("h2, h3")
      );
  
      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);
  
    return { nestedHeadings };
  };

const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];
  
    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;
  
      if (heading.nodeName === "H2") {
          nestedHeadings.push({ id, title, items: [] });
        } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
                id,
                title,
            });
        }
    });
    
    return nestedHeadings;
};
// Create nested list
/*
[
  {
      id: first,
      name: First Header,
      items: [] 
  },
  {
      id: second,
      name: Second Header,
      items: [{
          id: second-sub,
          name: Second Sub
          ** TO DO: Add third level if needed **
      }]
  }
]
*/

  const Headings = ({ headings }) => (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.title}</a>
            {heading.items.length > 0 && (          
            <ul>            
                {heading.items.map((child) => (              
                    <li key={child.id}>
                        <a href={`#${child.id}`}>{child.title}</a>
                    </li>            
                ))}          
            </ul>        
            )}      
        </li>
      ))}
    </ul>
  );
  
  const TableOfContents = () => {
    const { nestedHeadings } = useHeadingsData();
    return (
      <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} />    </nav>
    );
  };

  export default TableOfContents;