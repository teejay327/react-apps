import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WeatherApp from './projects/weather-app-v2.0/frontend/Components/WeatherApp.jsx';
import Header from './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.jsx';
import SearchForm from './projects/weather-app-v2.0/frontend/Components/SearchForm.jsx';
import Location from './projects/weather-app-v2.0/frontend/Components/Users/pages/Location.js';
import Today from './projects/weather-app-v2.0/frontend/Components/Users/pages/Today.js';
import Login from './projects/weather-app-v2.0/frontend/Components/Users/pages/Login.js';

import './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.css';
import './App.css';

const App = () => {
  return (
    <div className='app-container' >
      <div className='logo-title'>
        <Header />
      </div>

      <Router>
        <div className='pages-container'>
          <Routes>
            <Route exact path="/location" element={ <Location /> } />
            <Route exact path="/today" element={ <Today /> } />
          </Routes>
        </div>
      </Router>

      <div>
        <SearchForm />
        <WeatherApp /> 
      </div>            
    </div>
  );
}

export default App;