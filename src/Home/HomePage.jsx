import React from 'react'
// import backgroundImage from "../assets/home pagee.jpg";
import "./HomePage.css";

// import {IMG} from "../assets/stars_design.png";
function HomePage() {
    return (
        <div className="home-page">
          <div className="home-page-overlay"></div>
          <div
            className="home-page-background-image"
            // style={{ backgroundImage: IMG }}"
            style={{ backgroundImage: "url(../assets/stars_design.png)" }}
          ></div>
          <div className="home-page-content">
            <h1 className="home-page-title">Welcome!</h1>
            {/* <h1 className="title">Welcome to Our Website!</h1> */}
            <p className="home-page-subtitle">Sign up today to join the stars of the trading world and take your trading to the next level.</p>
            <button className="home-page-subscribe-button">Subscribe Now</button>
          </div>
        </div>
    );
}

export default HomePage