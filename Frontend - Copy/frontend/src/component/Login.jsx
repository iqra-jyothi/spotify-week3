

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { SiSimplelogin } from "react-icons/si";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './Util';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [logininfo, setlogininfo] = useState({
        email: '',
        password: ''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setlogininfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = logininfo;

        if (!email || !password) {
            return handleError('Email and password are required');
        }

        try {
            const url = "http://localhost:9091/auth/login";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logininfo)
            });

            const result = await response.json();
            // console.log(result);

            const { success, jwtToken, name, message ,email} = result || {};

            if (success) {
                handleSuccess(message);
                localStorage.setItem('jwtToken', jwtToken);
                localStorage.setItem('loggedInUser', name);
                localStorage.setItem('loggedInEmail', email);
                login(); // Update auth context state
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else {
                handleError(message || 'Invalid email or password');
            }
        } catch (err) {
            handleError(err.message || 'An unexpected error occurred');
        }
    };

    return (
        <Container className="mt-5 signup">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center mb-4">
                        <h2>Login <SiSimplelogin /></h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>
                        <br />
                        <Button className="button" variant="success" type="submit" block>
                            Login
                        </Button>
                        <br />
                        <span>
                            Don't have an account? <Link to="/signup">Signup</Link>
                        </span>
                    </Form>
                    <ToastContainer />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
