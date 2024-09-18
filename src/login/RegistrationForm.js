import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    username: '',      // Use lowercase "username" here for consistency
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!form.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!form.username) {
      newErrors.username = 'Username is required';  // Add username validation
      valid = false;
    }

    if (!form.email) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    // } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    //   newErrors.email = 'Email is invalid';
    //   valid = false;
    // }

    if (!form.address) {
      newErrors.address = 'Address is required';  // Validate address
      valid = false;
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (validateForm()) {
      try {
        const response = await fetch('http://127.0.0.1:8000/profiles/profile/customer/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: form.username,    
            name: form.name,
            address: form.address,
            email: form.email,
            password: form.password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData);
          setErrorMessage(errorData.detail || 'Failed to register. Please try again.');
          return;
        }

        const result = await response.json();
        console.log('Registration successful:', result);
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000); 
      } catch (error) {
        console.error('Error registering:', error);
        setErrorMessage('An error occurred during registration. Please try again later.');
      }
    }
  };

  return (
    <div className="registration-form-container">
      <Link to='/'>
        <img className="login__logo" src="/images/logo.jpg" alt="logo" />
      </Link>
      <h2>Register</h2>

      {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label> 
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="form-input"
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>  {/* Changed to "address" */}
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-input"
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="form-input"
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
