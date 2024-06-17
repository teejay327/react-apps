import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WeatherApp from './projects/weather-app-v2.0/frontend/Components/WeatherApp.jsx';
import Header from './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.jsx';
import SearchForm from './projects/weather-app-v2.0/frontend/Components/SearchForm.jsx';
import Location from './projects/weather-app-v2.0/frontend/Components/Users/pages/Location.js';
import Today from './projects/weather-app-v2.0/frontend/Components/Users/pages/Today.js';
import Login from './projects/weather-app-v2.0/frontend/Components/Users/pages/Login.js';
import Home from './projects/weather-app-v2.0/frontend/Components/Users/pages/Home.jsx';
import FiveDayForecast from './projects/weather-app-v2.0/frontend/Components/Users/pages/FiveDayForecast.jsx';
import { LoginContext } from './projects/weather-app-v2.0/frontend/Components/shared/context/login-context.js';

import './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.css';
import './App.css';

const App2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  // let routes;

  // if (isLoggedIn) {
  //   routes = ();  Put in ALL THE ROUTES <Route exact path="/" element={ <Home />} />
  // } else {
  //   routes = ();
  // }


  return (
    <LoginContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
    <div className='app-container' >
      <div className='logo-title'>
        <Header />
      </div>

      <Router>
        <div className='pages-container'>
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/location" element={ <Location /> } />
            <Route exact path="/today" element={ <Today /> } />
            <Route exact path="/5days" element={ <FiveDayForecast />} />
            <Route exact path="/login" element={ <Login />} />
          </Routes>
        </div>
      </Router>

      <div>
        <SearchForm />
        <WeatherApp /> 
      </div>            
    </div>
    </LoginContext.Provider>
  );
}

export default App2;