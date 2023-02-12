import { useState } from 'react';
import { Button, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import TeamService from '../../../core/services/TeamService';
import Team from '../../../models/team/team';

const AddTeamsPage = () => {
    const [show, setShow] = useState(false);

    const [formValue, setFormValue] = useState({
        name: '',
        player1: '',
        player2: '',
    });

    const onChange = (e: any) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const [validated, setValidated] = useState(false);
    const teamService = TeamService()

    const createTeam = async () => {

        const newTeam: Team = {
            id: Math.floor(Math.random() * 1000) + 1,
            "name": formValue.name,
            "wins": 0,
            "players": [
                formValue.player1,
                formValue.player2
            ]
        }
        try {
            if (newTeam) {
                teamService.createTeam(newTeam)
            }


        }
        catch (error) {
            // Do something about the error maybe a toaster etc.
        }




    }


    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log(validated)

        }
        if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            try {
                createTeam()
                setShow(true)
                setTimeout(function () {
                    window.location.reload()
                }, 2000);
            } catch (error) {
                console.log(error)
                console.log("Hello")
            }


        }
        setValidated(true);

    };
    return (
        <div>
            {show && <ToastContainer position="middle-center" className="">
                <Toast bg="success" onClose={() => setShow(false)} show={show} delay={20000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">You added a team</strong>
                    </Toast.Header>
                </Toast>
            </ToastContainer>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" value={formValue.name} onChange={(e: any) => onChange(e)}
                        required />
                    <Form.Control.Feedback type="invalid">
                        This field required
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>player 1</Form.Label>
                    <Form.Control type="text" name='player1' placeholder="Enter Name of player 1" required value={formValue.player1} onChange={(e: any) => onChange(e)} />
                    <Form.Control.Feedback type="invalid">
                        This field required
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>player 2</Form.Label>
                    <Form.Control type="text" name='player2' placeholder="Enter Name of player 1" required value={formValue.player2} onChange={(e: any) => onChange(e)} />
                    <Form.Control.Feedback type="invalid">
                        This field required
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className='my-2 mx-auto'>
                    <Button variant="primary" className='mb-3' size="lg" type='submit'>
                        Submit
                    </Button>
                </Row>
            </Form>
        </div >
    )
}

export default AddTeamsPage