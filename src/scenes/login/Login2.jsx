import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom"

import { useAuth } from "../../contexts/AuthContext"
import HomeBackground from '../../Home/welcome/HomeBackground';
import './login.css';
// import Illustration from './Illustration.svg';

const Login2 = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")
  
  const navigate = useNavigate ()
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   // Perform login action here
  //   // After login, setIsLoading(false) to stop the spinner animation
  //   // If verification is required, setShowVerification(true) to show the verification code field
  // };
  
  async function handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    try {
      setError("")
      // setLoading(true)
      await login(data.get('email'), data.get('password'))
      navigate("/dashboard")  
    } catch {
      setError("Failed to log in")
    }
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
