import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Nav/NavBar';
import './signup.css';
import { Form,InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div>
      <NavBar/>
      <div className='glass-bg'>
    <div className="container">
      <h2 className="my-4 row justify-content-center">Sign Up</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete='off'
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete='off'
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <label htmlFor="password" className="form-label">Password</label>
            <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  id='password'
                  name='password'
                />
            <InputGroup.Text onClick={togglePasswordVisibility} className="eye-icon">
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </InputGroup.Text>
                </InputGroup>
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
        </div>
        <div className="mb-5 row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  id='confirmPassword'
                  name='confirmPassword'
                />
            <InputGroup.Text onClick={togglePasswordVisibility} className="eye-icon">
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </InputGroup.Text>
                </InputGroup>
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;