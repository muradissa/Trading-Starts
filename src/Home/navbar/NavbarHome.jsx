
import React, { useState } from 'react';
import "./NavbarHome.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink } from "react-router-dom";

const NavbarHome = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav-container">
      <div className="navbar-brand">
        <img src={`../assets/logo-no-background.png`} alt="Logo" className='tradingStarLogo'/>
      </div>
      <div className={`navbar-nav ${showMenu ? 'show' : ''}`}>
        <NavLink to="/">
          <a className="nav-link" >Home</a>
        </NavLink>
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Price</a>
        <a className="nav-link" href="#">Contact Us</a>
        {showMenu &&
        <>
          <a className="nav-link" href="#">Login</a>
          <a className="nav-link" href="#">Signup</a>
        </> 
        }
      </div>
      <div className="navbar-right">
       
            {/* <button className="btn btn-primary"><b>Login</b></button>
            <button className="btn btn-secondary"><b>Signup</b></button> */}
            <NavLink to="/login">
              <button className="sec-btn"><b>Login</b></button>
            </NavLink>
            <NavLink to="/signup">
              <button className="pr-btn"><b>Signup</b></button>
            </NavLink>
            {/* <button className="sec-btn"><b>Login</b></button>
            <button className="pr-btn"><b>Signup</b></button> */}
     
        <button className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default NavbarHome;
