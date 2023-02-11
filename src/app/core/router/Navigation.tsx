import { Container, Nav, Navbar } from 'react-bootstrap';
import { SCORE_BOARD_ROUTE, START_GAME_ROUTE } from '../../constants/routes';
import { useUserContext } from '../context/userContext';

function Navigation() {
    const { user } = useUserContext()
    return (
        <Navbar bg="dark" variant="dark" expand="md" className='px-1 mb-5  '>
            <Container >
                <Navbar.Brand href="/">
                    Signify Foosball
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={START_GAME_ROUTE}>Start game</Nav.Link>
                        <Nav.Link href={SCORE_BOARD_ROUTE}>Score board</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {user?.email && <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.email}</a>
                    </Navbar.Text>
                </Navbar.Collapse>}
            </Container >
        </Navbar >
    );
}

export default Navigation;