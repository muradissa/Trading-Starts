import React from 'react'
import './firstsection.css'
import Img1 from "../images/homepage.jpg";
function Firstsection() {
  return (
    <div className="home-page">
      <div className="image-container">
        <img src={Img1} alt="your-image-alt-text" />
      </div>
      <div className="title-container">
        <h1 className="main-title">TradingStars</h1>
        <h2 className="secondary-title">Step into our digital world and explore all we have to offer. Welcome!</h2>
      </div>
    </div>
  );
}

export default Firstsection