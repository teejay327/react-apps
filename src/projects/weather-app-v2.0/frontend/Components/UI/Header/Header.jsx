import React, { useState } from 'react';
import Navbar  from '../Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import SideDrawer from '../Elements/SideDrawer/SideDrawer.js';

import sunImg from '../../../../assets/sunny.png';
import './Header.css';

const Header = () => {
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  return (
    <React.Fragment>
      { isDrawerOpen && (
        <SideDrawer>
          <nav className='nav-drawer'>
          <BrowserRouter>
              <Navbar />
            </BrowserRouter>
          </nav>
        </SideDrawer> 
      )};
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
    </React.Fragment>
  )
}

export default Header;