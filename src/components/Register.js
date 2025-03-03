import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // New CSS file for Register

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const userData = {
      username,
      email,
      password,
      mobile
    };

    try {
      const response = await fetch('http://localhost/Event/backend/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      setMessage(data.message);

      if (data.message === "User registered successfully") {
        // Navigate to login page on success
        navigate('/login');
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <img src="/logos/logo.png" alt="VEP Logo" className="register-logo" />
        <h2>Create an Account</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Mobile Number" 
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <p className="register-message">{message}</p>
        <Link to="/login" className="register-link">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Register;
