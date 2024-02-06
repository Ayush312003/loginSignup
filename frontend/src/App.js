// src/App.js
import React from 'react';
import UserRegistration from './components/UserRegistration.js';
import UserLogin from './components/UserLogin';
import './App.css'; // Import a CSS file for styling

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Welcome to Your App</h1>
      </div>
      <div className="main-content">
        <UserRegistration />
        <UserLogin />
      </div>
    </div>
  );
}

export default App;
