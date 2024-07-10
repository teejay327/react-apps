import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

import Login from '../Users/pages/Login.js';
import { LoginContext } from '../shared/context/login-context.js';
//import Header1 from '../UI/Header/Header1.jsx';
import './MainNavigation.css';

const MainNavigation = (props) => {
  const login = useContext(LoginContext);

    return (
    <nav className='navbar-container'>
      <ul >
        <li className='navbar-elements'>
          <NavLink to="/" exact="true">Home</NavLink>
        </li>
        { !login.isLoggedIn && (
        <li className='navbar-elements'>
          <NavLink to="/location">Location</NavLink>
        </li>
        )}
        { login.isLoggedIn  && (
        <li className='navbar-elements'>
          <NavLink to="/today">Today's forecast</NavLink>
        </li> 
        )}
        { login.isLoggedIn && (
        <li className='navbar-elements'>
          <NavLink to="/5dayforecast">5-day forecast</NavLink>
        </li>
        )}
        { !login.isLoggedIn && (
        <li className='navbar-elements'>
          <NavLink to="/login">Login</NavLink>
        </li>
        )}
      </ul>
    </nav>    
  )
};

export default MainNavigation;