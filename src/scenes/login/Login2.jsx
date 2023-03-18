import React, { useState } from 'react';
import HomeBackground from '../../Home/welcome/HomeBackground';
import './login.css';
// import Illustration from './Illustration.svg';

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Perform login action here
    // After login, setIsLoading(false) to stop the spinner animation
    // If verification is required, setShowVerification(true) to show the verification code field
  };

  return (
    <>
    <div className="login-form-container">
      {/* <img src={Illustration} alt="Login Illustration" className="illustration" /> */}
      <div className='login-form-box'>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            />
            {showVerification && (
            <>
                <label htmlFor="verificationCode">Verification Code:</label>
                <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                />
            </>
            )}
            <button type="submit" className={isLoading ? 'loading' : 'pr-btn'}>
            {isLoading ? 'Loading...' : 'Log In'}
            </button>
        </form>
        <div className='login-texts-a'>
            <a href="!#" className='login-forgot-password'>Forgot password?</a>
            <p className="">Don't have an account? <a href="#!">Register</a></p>
        </div>
      </div>
    </div>
    <HomeBackground/>
    </>
  );
};

export default Login2;
