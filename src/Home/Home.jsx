import React from 'react'
import AboutBot from './AboutBot';
import Features from './Features'
import FooterHome from './FooterHome';
import NavbarHome from "./NavbarHome"

import HomePage from './HomePage';
import AboutTradingStars from './AboutTradingStars'
import Pricing from './Pricing';
function Home() {
  return (
    <div className='container__home'>
        <NavbarHome/>

        <HomePage/>
        <AboutTradingStars/>
        <AboutBot/>
        <Features/>
        <Pricing/>
        <FooterHome/>
    </div>
  )
}

export default Home