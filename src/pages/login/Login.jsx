import React from 'react';
import { RiLockPasswordLine, RiUserLine, RiMailLine } from 'react-icons/ri';
import './Login.css';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    alert('Forgot Password clicked!');
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="loginName">Login Name</label>
          <input type="text" id="loginName" required />
          <RiUserLine className="icon" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          <RiMailLine className="icon" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
          <RiLockPasswordLine className="icon" />
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </div>
      </form>
    </div>
  );
};

export default Login;
































