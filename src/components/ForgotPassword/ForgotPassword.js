import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import './forgot.css'
import NavBar from '../Nav/NavBar';

const ForgotPassword = () => {
  const [email, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match.');
      setMessageType('danger');
      return;
    }

    try {
      const response = await axios.post('http://localhost:7230/Forgotpass', {
        email,
        newPassword,
      });

      if (response.status === 201) {
        setMessage('Password changed successfully.');
        setMessageType('success');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage(response.data.message);
        setMessageType('danger');
      }
    } catch (error) {
      setMessage('An error occurred while changing the password.');
      setMessageType('danger');
    }
  };

  return (
    <div className='changepass-bg'>
        <NavBar/>
    <div className='fp-container'>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="mt-5 text-light mb-4">Change Password</h2>
          {message && (
            <Alert variant={messageType} onClose={() => setMessage('')} dismissible>
              {message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCurrentPassword" className="mb-3">
              <Form.Label className='text-light'>Email ID</Form.Label>
              <Form.Control
                type="email"
                value={email}
                className='mb-4'
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mb-3">
              <Form.Label className='text-light'>New Password</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                className='mb-4'
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label className='text-light'>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                className='mb-5'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mb-5">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default ForgotPassword;
