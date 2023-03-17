import React from 'react'
import AboutBot from './aboutbot/AboutBot';
import Features from './features/Features'
import FooterHome from './footer/FooterHome';
import NavbarHome from "./navbar/NavbarHome"
import HomePage from './welcome/HomePage';
import AboutTradingStars from './aboutTradingStars/AboutTradingStars'
import Pricing from './pricing/Pricing';
import ContactUs from './contactus/ContactUs';
import './home.css'
function Home() {
  return (
    <div className='container__home'>
        <NavbarHome/>
        <HomePage/>
        <div className='container__home-sections'>        
          <AboutTradingStars/>
          <AboutBot/>
          <Features/>
          <Pricing/>
          <ContactUs/>
        </div>
        <FooterHome/>
    </div>
  )
}

export default Home