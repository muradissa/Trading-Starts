import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

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

const SliderComponent = () => {
  return (
    <div className="container__slider-images">
      <Slider {...settings} className="slider" style={{maxHeight:"",width:"60%"}}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt=""  className='slider__img'/>
          </div>
        ))}
      </Slider>
      <h2 className="secondary-title-slider1">Step into our digital world and explore all we have to offer.</h2>
      <h2 className="secondary-title-slider2">Welcome!</h2>
    </div>
  );
};

export default SliderComponent;