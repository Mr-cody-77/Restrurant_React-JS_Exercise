import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log('Submitted:', { username, password });
  };

  const handleToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        {isSignup && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn">{isSignup ? 'Sign Up' : 'Login'}</button>
        <p className="toggle-signup" onClick={handleToggleSignup}>
          {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
        </p>
      </form>
    </div>
  );
};

export default Login;
