
import React from 'react';
import './footer.css';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import logo from '../assets/logo-no-background.png';

function HomeFooter() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <img src="../assets/logo-no-background.png" alt="Logo" className="footer__logo" />
         
        </div>
        {/* <div className="footer__column">
          <h3 className="footer__heading">Products</h3>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#">Product 1</a></li>
            <li className="footer__list-item"><a href="#">Product 2</a></li>
            <li className="footer__list-item"><a href="#">Product 3</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Company</h3>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#">About</a></li>
            <li className="footer__list-item"><a href="#">Contact</a></li>
            <li className="footer__list-item"><a href="#">Careers</a></li>
          </ul>
        </div> */}
        <div className="footer__column">
          <div className='footer__row'>
             <a>Email : <DeveloperModeOutlinedIcon/></a>
             <a>adasd</a>
             <a>xxxxx</a>
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

export default HomeFooter;