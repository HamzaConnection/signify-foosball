import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SessionCache from '../../../shared/cache/SessionCache';
import User from '../../../models/user/user';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [user, setUser] = useState(SessionCache().get<User>('user'));
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            navigate("/start-game")
        }
        setValidated(true);

    };

    return (
        <>
            <h1 className='text-center'>Login Page</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required size="lg" type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">
                        This field required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicPassword">
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
                    <Button variant="secondary" size="lg">
                        Continue as Guest
                    </Button>
                </Row>
            </Form>
        </>
    );
}

export default LoginPage;