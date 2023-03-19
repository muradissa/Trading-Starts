
import React, { useState,useEffect } from 'react';
import "./NavbarHome.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink ,useNavigate} from "react-router-dom";

const NavbarHome = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navTitle, setNavTitle] = useState(true);

  const navigate = useNavigate ()

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  // useEffect(() => {
  //   if (navTitle) {
      
  //     navigate("/");
  //   }
  // }, [navTitle]);


  return (
    <nav className="nav-container">
      <div className="navbar-brand">
        <img src={`../assets/logo-no-background.png`} alt="Logo" className='tradingStarLogo'/>
      </div>
      <div className={`navbar-nav ${showMenu ? 'show' : ''}`}>
        
          {/* <NavLink to="/" className="nav-link">
            <a >Home</a>
          </NavLink> */}

          <a className="nav-link" href="/#home" >Home</a>
          <a className="nav-link" href="/#about">About</a>
          <a className="nav-link" href="/#bot" >Bot</a>
          <a className="nav-link" href="/#pricing" >Price</a>
          <a className="nav-link" href="/#contact-us" >Contact Us</a>
          
      
        {showMenu &&
        <>
          <a className="nav-link" href="/login">Login</a>
          <a className="nav-link" href="/signup" >Signup</a>
        </> 
        }
      </div>
      <div className="navbar-right" >
       
      {!showMenu &&
        <>
            <NavLink to="/login" >
              <button className="sec-btn" ><b>Login</b></button>
            </NavLink>
            <NavLink to="/signup" >
              <button className="pr-btn" ><b>Signup</b></button>
            </NavLink>
        </> 
        }
            {/* <NavLink to="/login" >
              <button className="sec-btn" ><b>Login</b></button>
            </NavLink>
            <NavLink to="/signup" >
              <button className="pr-btn" ><b>Signup</b></button>
            </NavLink> */}

        <button className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default NavbarHome;
