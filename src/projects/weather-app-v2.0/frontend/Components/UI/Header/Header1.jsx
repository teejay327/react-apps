import React, { useState } from 'react';
import Navbar  from '../Navbar/Navbar';

// import SideDrawer from '../Elements/SideDrawer/SideDrawer.js';
// import Backdrop from '../Elements/Backdrop.js';
import sunImg from '../../../../assets/sunny.png';
import './Header.css';

const Header1 = () => {
  // const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  // const openDrawer = () => {
  //   setIsDrawerOpen(true);
  // }

  // const closeDrawer = () => {
  //   setIsDrawerOpen(false);
  // }

  // <React.Fragment>
  // { isDrawerOpen && <Backdrop onClick={ closeDrawer }/> }
  // { isDrawerOpen && (
  //   <SideDrawer>
  //     <nav className='nav-drawer'>
  //     <BrowserRouter>
  //         <Navbar />
  //       </BrowserRouter>
  //     </nav>
  //   </SideDrawer> 
  // )}

//   <button className='nav-menu-btn' onClick={ openDrawer }>
//   <span />
//   <span />
//   <span />
// </button>

// </React.Fragment>

  return (

      <div className='header'>

        {/* <img src={ sunImg } alt="Sun weather" />
        <h1>WeatherLink</h1> */}
        <nav className='header-nav'>
            <Navbar />
        </nav>
      </div>

  )
}

export default Header1;