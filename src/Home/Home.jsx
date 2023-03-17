import React from 'react'
import AboutBot from './AboutBot';
import Features from './Features'
import FooterHome from './FooterHome';
import NavbarHome from "./NavbarHome"
import HomePage from './HomePage';
import AboutTradingStars from './AboutTradingStars'
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import './home.css'
import AboutBot2 from './AboutBot2';
function Home() {
  return (
    <div className='container__home'>
        <NavbarHome/>
        {/* <IconsBackground/> */}
        <HomePage/>
        <div className='container__home-sections'>        
          <AboutTradingStars/>
          {/* <AboutBot/> */}
          <AboutBot2/>
          <Features/>
          <Pricing/>
          <ContactUs/>
        </div>
        <FooterHome/>
    </div>
  )
}

export default Home