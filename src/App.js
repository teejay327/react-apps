import React, { useState, useCallback } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoginContext } from './projects/weather-app-v2.0/frontend/Components/shared/context/login-context.js';
import WeatherApp from './projects/weather-app-v2.0/frontend/Components/WeatherApp.jsx';
import Header from './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.jsx';
import SearchForm from './projects/weather-app-v2.0/frontend/Components/SearchForm.jsx';
import Location from './projects/weather-app-v2.0/frontend/Components/Users/pages/Location.js';
import Today from './projects/weather-app-v2.0/frontend/Components/Users/pages/Today.js';
import Login from './projects/weather-app-v2.0/frontend/Components/Users/pages/Login.js';
import Home from './projects/weather-app-v2.0/frontend/Components/Users/pages/Home.jsx';
import FiveDayForecast from './projects/weather-app-v2.0/frontend/Components/Users/pages/FiveDayForecast.jsx';
import RootLayout from './projects/weather-app-v2.0/frontend/Components/Users/pages/RootLayout.js';
import NotFoundPage from './projects/weather-app-v2.0/frontend/Components/Users/pages/NotFound.jsx';

import './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.css';
import './App.css';

// new code here
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/location', element: <Location /> }
    ],
  },
]);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  // let routes;

  // if (isLoggedIn) {
  //   routes = (
  //     <Routes>
  //       <Route exact path="/" element={ <Home />} />
  //       <Route exact path="/location" element={ <Location /> } />
  //       <Route exact path="/today" element={ <Today /> } />
  //       <Route exact path="/5dayforecast" element={ <FiveDayForecast />} />
  //       <Route path="*" element={ <NotFoundPage/> } />
  //     </Routes>
  //   );
  // } else {
  //   routes = (
  //     <Routes>
  //         <Route exact path="/" element={ <Home />} />
  //         <Route exact path="/login" element={ <Login />} />
  //     </Routes>
  //   );
  // }

  return (
    <LoginContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
    <div className='app-container' >
      <div className='logo-title'>
        <Header />
      </div>

      {/* <Router>
        <div className='pages-container'>
            { routes }
        </div>
      </Router> */}
      <RouterProvider router={ router } />
      
      <div>
        <SearchForm />
        <WeatherApp /> 
      </div>            
    </div>
    </LoginContext.Provider>
  );
}

export default App;