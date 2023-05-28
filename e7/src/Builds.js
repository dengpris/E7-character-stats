import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
  
function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Builds({ name }) {
    return (
        <>
        <Container className='mt-5'>
        <h2>{Capitalize(name)}</h2>
        {/* Character Stats Image */}
            <Image src={images[`${name}_stats.png`]} fluid='True' alt='Rose Stats'/>
        {/* Artifact and EE */}
            <div className="artifact"></div>
            <div className="ee"></div>
        {/* Gear Pieces Grid */}
            <div className="col-lg-4 mb-3">
                <div className="sword"></div>
                <div className="helm"></div>
                <div className="chest"></div>
                <div classname="neck"></div>
                <div className="ring"></div>
                <div className="boots"></div>
            </div>
        </Container>
        </>
    )
}

function BuildsList() {
    return (
        <>
            <Builds name='rose'/>
        </>
    )
}

export default BuildsList;