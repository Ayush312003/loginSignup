import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
      console.log(response.data);
      alert("Login successful");
    } catch (error) {
      alert("Login failed, invalid credentials");
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
