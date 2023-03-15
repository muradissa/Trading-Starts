import React from "react";
import "./footerHome.css";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterHome = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-left">
        <img src="../assets/logo-no-background.png" alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-middle">
        <h3>Contact Us</h3>
        <p>Email: tradingStars@gmail.com</p>
      </div>
      <div className="footer-right">
        <h3>Follow Us</h3>
        <ul className="social-icons">
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
      
    </footer>
    <div className="footer-copyright">
      <p>&copy; 2023 TradingStars</p>
    </div>
    </>
  );
};

export default FooterHome;
