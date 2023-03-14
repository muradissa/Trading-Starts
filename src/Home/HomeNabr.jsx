import React from 'react';
import "./home.css"
const HomeNabr = () => {
  return (
    <nav className="nav-container">
      <div className="navbar-brand">
        <img src={`../assets/logo-no-background.png`} alt="Logo" className='tradingStarLogo'/>
      </div>
      <div className="navbar-nav">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Price</a>
        <a className="nav-link" href="#">Contact Us</a>
      </div>
      <div className="navbar-right">
        <button className="btn btn-primary"><b>Login</b></button>
        <button className="btn btn-secondary"><b>Signup</b></button>
      </div>
    </nav>
  );
};

export default HomeNabr;
