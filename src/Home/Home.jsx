import React from 'react'
import Firstsection from './Firstsection';
// import SecondSection from './Secondsection';
import AboutUs from './AboutUs';
import Features from './Features'
import HomeFooter from './HomeFooter';
import HomeNabr from "./HomeNabr"
import Pricing from './Pricing';
import SliderComponent from './SliderComponent';

function Home() {
  return (
    <div className='container__home'>
        <HomeNabr/>
        {/* <h2>Welcome to TradingStars</h2>
        <h2>Logo</h2> */}
        {/* <Firstsection/> */}
        {/* <SecondSection/> */}
        <SliderComponent/>
        <AboutUs/>
        <Features/>
        <Pricing/>
        <HomeFooter/>
    </div>
  )
}

export default Home