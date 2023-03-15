
import React from 'react';
import './footerHome.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import logo from '../assets/logo-no-background.png';

function FooterHome() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <img src="../assets/logo-no-background.png" alt="Logo" className="footer__logo" />  
        </div>

        <div className="footer__column">
          <div className='footer__row'>
             <a>Email : tradingStars@gmail.com</a>
             
          </div>
         
        </div>
        <div className="footer__column">
          <div className='footer__row' style={{}}>
            {/* style={{display: "contents",gap:"1rem"}} */}
            <a> <InstagramIcon/> </a>
            <a> <FacebookIcon/> </a>
            <a> <TwitterIcon/> </a>
            <a> <LinkedInIcon/> </a>
          </div>
          {/* display: contents; 
              display: flex; 
              gap: 1rem;
              margin: auto;
              right: 0; 
              padding-right: 2rem; 
              position: absolute; 
          */}
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">&copy; 2023 TradingStars. All rights reserved. <a href="#">Terms</a></p>
      </div>
    </footer>
  );
}

export default FooterHome;