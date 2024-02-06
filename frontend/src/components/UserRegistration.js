import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', {
        username,
        password,
      });
      
      console.log('Registration successful:', response.data);
      alert("User registered");
    } catch (error) {
      console.error('Registration failed:', error.message, error.response?.data);
      alert("Registration failed");
  
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Server error message:', error.response.data.error);
      }
    }
  };
  

  return (
    <div>
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default UserRegistration;
