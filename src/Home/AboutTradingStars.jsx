import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider2.css';

const images = [
    {id:1 , url:"../assets/cryptolist.jpg"},
    {id:2 , url:"../assets/tradinghistory.jpg"},
    {id:3 , url:"../assets/analysic1.jpg"},

];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false
};

const AboutTradingStars = () => {
  return (
    <div className="container__slider-images2">
        <div className="left-panel">
            <p>
                Welcome to TradingStars, your go-to platform for intelligent and automated trading.
                Our advanced trading bot offers a variety of customizable features and powerful algorithms to help you maximize your trading strategies and achieve success in the market.
            </p>
            <p>
                With real-time market analysis and automated trading capabilities, TradingStars makes it easy to stay ahead of the game and make informed trading decisions.
                Whether you're a seasoned trader or just starting out, our platform is designed to help you succeed.
            </p>
        </div>
        <div className="right-panel">
        <Slider {...settings} className="slider" style={{maxHeight:"",width:"100%"}}>
            {images.map((image) => (
            <div key={image.id}>
                <img src={image.url} alt=""  className='slider__img'/>
            </div>
            ))}
        </Slider>
        </div>
      {/* <h2 className="secondary-title-slider1">Step into our digital world and explore all we have to offer.</h2>
      <h2 className="secondary-title-slider2">Welcome!</h2> */}
    </div>
  );
};

export default AboutTradingStars;