import { useState } from 'react';
import { Button, FloatingLabel, Form, Container, Row, Col} from 'react-bootstrap';
import Navbar from "../Navbar";
import './login.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleChange = (event) => {
	// 	const {name, value} = event.target;

	// 	setUser(prev => {
	// 		return({
	// 			...prev,
	// 			[name]: value,
	// 		})
	// 	})
	// };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log(user);
    // }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
    }

    return (
        
        <Container>
            <Navbar />
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <h1>Signup</h1>
                </Col>
                
            </Row>
            <Row className="justify-content-md-center">
                <Col sm lg="5">
                    <Form className="login">
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email:"
                                className="mb-3"
                                >
                                <Form.Control 
                                    name="company"
                                    type="text"
                                    value={email} 
                                    placeholder="Email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password"
                                className="mb-3"
                                >
                                <Form.Control 
                                    type="password"
                                    name="password" 
                                    value={password} 
                                    placeholder="Password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                            
                        </Form.Group>
                        <Button className="btn btn-primary glow-on-hover login-btn" onClick={handleSubmit} >
                            <i className="fa-solid fa-right-to-bracket"></i>SIGNUP
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;