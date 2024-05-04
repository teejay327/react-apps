import React from 'react';
import { Link } from 'react-router-dom';
import Navbar  from '../Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

import sunImg from '../../../../assets/sunny.png';
import './Header.css';

const Header = () => {

  return (
    <div className='header'>
      <button className='nav-menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <img src={ sunImg } alt="Sun weather" />
      <h1>WeatherLink</h1>
      <nav className='header-nav'>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </nav>
    </div>
  )
}

export default Header;