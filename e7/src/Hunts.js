import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TableOfContents from './components/TableOfContents';
function Hunts() {
    return (
        <>
        <TableOfContents />
        <Container className='mt-5'>
            <h2>Wyvern 13</h2>
            <h3>One-Shot</h3>
        </Container>
        </>
    )
}

export default Hunts;