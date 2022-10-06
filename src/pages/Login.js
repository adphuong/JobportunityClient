import { useState } from 'react';
import { Button, FloatingLabel, Form, Container, Row, Col} from 'react-bootstrap';
import { useLogin } from '../hooks/useLogin'
import Navbar from "../components/Navbar";
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password)
    }

    return (
       
        <div class="login">
            <Container>
                <Navbar />
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <h1>Login</h1>
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
                            <Button disabled={isLoading} className="btn btn-primary glow-on-hover login-btn" onClick={handleSubmit} >
                                <i className="fa-solid fa-right-to-bracket me-3"></i>LOGIN
                            </Button>
                            {error && <div className="error">{error}</div>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;