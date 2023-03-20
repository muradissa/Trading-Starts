import React,{useState} from 'react'
import { Link } from "react-router-dom";

import './navbar.css';
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai";
import {BiBook,BiMessageSquareDetail,BiStar} from "react-icons/bi";
import {FaRobot} from "react-icons/fa";
import {CgTrack} from "react-icons/cg";
import {TbMapSearch} from 'react-icons/tb'
const Navbar = () => {
  const [activeNav, setActiveNav ] = useState('')

  return (
    <>
    <nav className='navbar__top '>
      <Link to='/dashboard' className='navbar__top-item'>
          <a  className={activeNav==='#' ?'active ':''} onClick={() => setActiveNav('#')}>
            <AiOutlineHome style={{margin:'auto auto'}}/>Home
          </a>
      </Link>
      <Link to='/tradingbot'>
        <a className={activeNav==='#portfolio' ?'active navbar__top-item':'navbar__top-item'} onClick={() => setActiveNav('#portfolio')}>
          <FaRobot style={{margin:'auto auto'}}/>Bot
        </a>
      </Link>
      <Link to='/dashboard'>
        <a href='#experience' className={activeNav==='#experience' ?'active ':''} onClick={() => setActiveNav('#experience')}>
          <CgTrack style={{margin:'auto auto'}}/>Tracking
        </a>
      </Link>
      <Link to='/dashboard'>
        <a href='#contact' className={activeNav==='#contact' ?'active ':''} onClick={() => setActiveNav('#contact')}>
          <TbMapSearch style={{margin:'auto auto'}}/>Trading Map
        </a>

      </Link>
      {/* <a href='/' className={activeNav==='#' ?'active':''} onClick={() => setActiveNav('#')}><AiOutlineHome style={{margin:'auto auto'}}/>Home</a> */}
      {/* <a href='#about' className={activeNav==='#about' ?'active':''} onClick={() => setActiveNav('#about')}><BiStar style={{margin:'auto auto'}}/>Top 10</a>  */}
      {/* <a href='#experience' className={activeNav==='#experience' ?'active':''} onClick={() => setActiveNav('#experience')}><CgTrack style={{margin:'auto auto'}}/>Tracking</a> */}
      {/* <a href='/tradingbot' className={activeNav==='#portfolio' ?'active':''} onClick={() => setActiveNav('#portfolio')}><FaRobot style={{margin:'auto auto'}}/>Bot</a> */}
      {/* <a href='#contact' className={activeNav==='#contact' ?'active':''} onClick={() => setActiveNav('#contact')}><TbMapSearch style={{margin:'auto auto'}}/>Trading Map</a> */}
    </nav>
    {/* <div className='radios__buttons'>
      <div class="group">
        <input type="radio" name="rb" id="rb1" />
        <label for="rb1">Both</label>
        <input type="radio" name="rb" id="rb2" />
        <label for="rb2">Stocks</label>
        <input type="radio" name="rb" id="rb3" />
        <label for="rb3">Crypto</label>
      </div>
    </div> */}
    </>
  )
}

export default Navbar