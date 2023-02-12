import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ADD_TEAM_ROUTE, LOGIN_ROUTE, REMOVE_TEAM_ROUTE, SCORE_BOARD_ROUTE, START_GAME_ROUTE } from '../../constants/routes';
import { useUserContext } from '../context/userContext';
import AuthService from '../services/AuthService';

function Navigation() {
    const { user, setUser } = useUserContext()
    const useAuthService = AuthService()
    return (
        <Navbar bg="dark" variant="dark" expand="md" className='px-1 mb-5  '>
            <Container >
                <Navbar.Brand href="/">
                    Signify Foosball
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href={SCORE_BOARD_ROUTE}>Score board</Nav.Link>
                        {user?.email &&
                            <>
                                <Nav.Link href={START_GAME_ROUTE}>Start game</Nav.Link>
                                <Nav.Link href={ADD_TEAM_ROUTE}>Add team</Nav.Link>
                                <Nav.Link href={REMOVE_TEAM_ROUTE}>Remove team</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
                {user?.email && <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <Button variant="link" onClick={(e) => {
                            useAuthService.logOut()

                        }}> {user?.email}</Button>
                    </Navbar.Text>
                </Navbar.Collapse>}

                {!user?.email &&
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav.Link href={LOGIN_ROUTE}>Sign in</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                }
            </Container >
        </Navbar >
    );
}

export default Navigation;