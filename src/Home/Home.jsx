import React from 'react'
// import Firstsection from './Firstsection';
// import SecondSection from './Secondsection';
import AboutUs from './AboutUs';
import Features from './Features'
import FooterHome from './FooterHome';
import NavbarHome from "./NavbarHome"
// import Pricing from './Pricing';
// import SliderComponent from './SliderComponent';
import HomePage from './HomePage';
import AboutTradingStars from './AboutTradingStars'
import Pricing2 from './Pricing2';
function Home() {
  return (
    <div className='container__home'>
        <NavbarHome/>
        {/* <h2>Welcome to TradingStars</h2>
        <h2>Logo</h2> */}
        {/* <Firstsection/> */}
        {/* <SecondSection/> */}
        <HomePage/>
        <AboutTradingStars/>
        {/* <SliderComponent/> */}
        <AboutUs/>
        <Features/>
        {/* <Pricing/> */}
        <Pricing2/>
        <FooterHome/>
    </div>
  )
}

export default Home