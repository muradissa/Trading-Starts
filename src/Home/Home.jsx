import React from 'react'
import AboutBot from './AboutBot';
import Features from './Features'
import FooterHome from './FooterHome';
import NavbarHome from "./NavbarHome"
import HomePage from './HomePage';
import AboutTradingStars from './AboutTradingStars'
import Pricing from './Pricing';
import ContactUs from './ContactUs';
function Home() {
  return (
    <div className='container__home'>
        <NavbarHome/>
        <HomePage/>
        <AboutTradingStars/>
        <AboutBot/>
        <Features/>
        <Pricing/>
        <ContactUs/>
        <FooterHome/>
    </div>
  )
}

export default Home