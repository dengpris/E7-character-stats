import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function currentPage({ isActive, isPending }) {
    return isActive ? 'current-page' : '';
}

function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Nav>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Z</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/builds'>
                        <Nav.Link>Builds</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/hunts'>
                        <Nav.Link>Hunts</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/expeditions'>
                        <Nav.Link>Expeditions</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;