import { useState } from 'react';
import { Button, FloatingLabel, Form, Container, Row, Col} from 'react-bootstrap';
import { useSignup } from '../hooks/useSignup'
import Navbar from "../components//Navbar";
import '../styles/Login.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();


    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password)
    }

    return (
        <div class="login">
            <Container>
                <Navbar />
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <h1>Signup</h1>
                        <h5 className='mt-4'>Already have an account? <a href="/login">Login</a></h5>
                    </Col>
                    
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm lg="5">
                        <Form className="login">
                            <Form.Group>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
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
                            <Button disabled={isLoading} className="mt-3 btn btn-primary glow-on-hover login-btn" onClick={handleSubmit} >
                                <i className="fa-solid fa-right-to-bracket me-3"></i>SIGNUP
                            </Button>
                            {error && <div className="auth-error ">{error}</div>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup;