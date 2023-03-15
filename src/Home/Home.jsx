import React from 'react'
import AboutBot from './AboutBot';
import Features from './Features'
import FooterHome from './FooterHome';
import NavbarHome from "./NavbarHome"

import HomePage from './HomePage';
import AboutTradingStars from './AboutTradingStars'
import Pricing from './Pricing';
import Footer2 from './footer2';
function Home() {
  return (
    <div className='container__home'>
        <NavbarHome/>

        <HomePage/>
        <AboutTradingStars/>
        <AboutBot/>
        <Features/>
        <Pricing/>
        {/* <FooterHome/> */}
        <Footer2/>
    </div>
  )
}

export default Home