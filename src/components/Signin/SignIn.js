import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './signin.css';
import NavBar from '../Nav/NavBar';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7230/login', { username, password });
      console.log('Sign in successful:', response.data);
      navigate("/E-Commerce-React")
      
    } catch (error) {
      console.error('Error signing in:', error);
      setErrors('Invalid username or password');
    }
  };

  return (
    <div className='glass-bg'>
      <NavBar/>
      <div className='container'>
        <Row className="w-100">
          <Col md={6} lg={4} className="mx-auto">
            <h3 className="text-center mb-4">Sign In</h3>
            <Form onSubmit={handleSubmit}  >
              <FloatingLabel controlId="formBasicUsername" label="Username" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={!!errors}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel controlId="formBasicPassword" label="Password" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors}
                    required
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility} className="eye-ico">
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
                </InputGroup>
              </FloatingLabel>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;
