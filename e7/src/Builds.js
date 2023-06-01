import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Builds.css';
import Description from './Builds_Description';

const characters = {
    'rose': 'Rose',
}

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
  const images = importAll(require.context('./builds', true, /\.(png|jpe?g|svg)$/));
  
// function Capitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

function Builds({ id, name }) {
    const stats = images[`${id}/${id}_stats.png`]
    const artifact = images[`${id}/${id}_artifact.png`]
    const ee = images[`${id}/${id}_ee.png`]
    
    return (
        <Container className='mt-5'>
        <h2>{name}</h2>
        
        <Row> 
            {/* Character Stats Image */}
            <Col xs={8}>
                <Image src={stats} fluid='True' alt={`${name} stats`}/>
            </Col>
            <Col className='align-self-center'> 
                {/* Artifact and EE */}
                { artifact && 
                    <div className='mouseover me-5'>
                        <b>Artifact</b><br/>  
                        <img src={artifact} alt={`${name} artifact`} className='mouseover img'/>
                    </div>
                } 
                { ee && 
                    <div className='mouseover'>
                            <b>Exclusive Equipment</b><br/>  
                            <img src={ee} alt={`${name} exlusive equipment`} className='mouseover img'/>
                    </div>
                }
                
                {/* Description */}
                <Description character={name}/>

            </Col>
        </Row>
        
        {/* Artifact and EE */}
            {/* <Row className='mt-2'>
                <Col className='artifact'>
                    <h5>Artifact </h5>
                    { artifact && <Image src={artifact} fluid='True' alt={`${name} artifact`} className='builds-medium-image'/> }
                </Col>
                <Col className='ee builds-medium-image'>
                    <h5>Exclusive Equipment</h5>
                    { ee && <Image src={ee} fluid='True' alt={`${name} exclusive equipment`} className='builds-medium-image'/> }
                </Col>
            </Row> */}
        
        {/* Gear Pieces Grid */}
            <div className="col-lg-4 mb-3">
                <div className="sword"></div>
                <div className="helm"></div>
                <div className="chest"></div>
                <div className="neck"></div>
                <div className="ring"></div>
                <div className="boots"></div>
            </div>
        </Container>
    )
}

function BuildsList() {
    return (
        <>  
        {
            Object.entries(characters).map(([key, value]) => (
                <Builds key={key} name={value} id={key}/>
            ))
        }
        </>
    )
}

export default BuildsList;