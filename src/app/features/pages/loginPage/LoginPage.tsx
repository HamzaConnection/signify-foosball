import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SessionCache from '../../../shared/cache/SessionCache';
import User from '../../../models/user/user';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SCORE_BOARD_ROUTE, START_GAME_ROUTE } from '../../../constants/routes';
import AuthService from '../../../core/services/AuthService';
import { useUserContext } from '../../../core/context/userContext';


const LoginPage = () => {
    const userContext = useUserContext()

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const useAuthService = AuthService()

    const signIn = async () => {
        try {
            const adminUser = await useAuthService.getAdmin()
            if (adminUser) {

                SessionCache().set<User>('user', adminUser)
                userContext.setUser(adminUser)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            signIn()
            navigate(START_GAME_ROUTE)
        }
        setValidated(true);

    };

    return (
        <>
            <h1 className='text-center'>Login Page</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mx-auto w-50">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required size="lg" type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">
                        This field required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 mx-auto w-50">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required size="lg" type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">
                        This field required
                    </Form.Control.Feedback>
                </Form.Group>
                <Row className='my-2 mx-auto w-50'>
                    <Button variant="primary" type="submit" className='mb-3' size="lg">
                        Sign in
                    </Button>
                    <Button variant="secondary" size="lg" onClick={() => navigate(SCORE_BOARD_ROUTE)}>
                        Continue as Guest
                    </Button>
                </Row>
            </Form>
        </>
    );
}

export default LoginPage;