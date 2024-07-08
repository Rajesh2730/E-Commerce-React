import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Signin/signin.css'
import NavBar from '../Nav/NavBar';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({  username, password });
  };

  return (
    <div className='glass-bg'>
        <NavBar/>
    <div className='container'>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h3 className="text-center mb-4">Sign In</h3>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="formBasicUsername" label="Username" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="formBasicPassword" label="Password" className="mb-3">
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputGroup.Text onClick={togglePasswordVisibility} className="eye-icon">
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </InputGroup.Text>
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
