import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function currentPage({ isActive, isPending }) {
    return isActive ? 'current-page' : '';
}

function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Nav>
                    <Navbar.Brand href='#'>
                        Z
                    </Navbar.Brand>
                    <Nav.Link href='builds' className={currentPage}>
                        Builds
                    </Nav.Link>
                    <Nav.Link href='hunts' className={currentPage}>
                        Hunts
                    </Nav.Link>
                    <Nav.Link href='expeditions' className={currentPage}>
                        Expeditions
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;