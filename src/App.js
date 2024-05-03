import { BrowserRouter } from 'react-router-dom';

import WeatherApp from './projects/weather-app-v2.0/frontend/Components/WeatherApp.jsx';
import Header from './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.jsx';
import Navbar from './projects/weather-app-v2.0/frontend/Components/UI/Navbar/Navbar.jsx';
import SearchForm from './projects/weather-app-v2.0/frontend/Components/SearchForm.jsx';

import './projects/weather-app-v2.0/frontend/Components/UI/Header/Header.css';
import './App.css';

const App = () => {
  return (
    <div className='app-container' >
      <div className='logo-title'>
        <Header />
      </div>
      <div >
        <BrowserRouter >
          <Navbar />
        </BrowserRouter >
      </div>
      <div>
        <SearchForm />
        <WeatherApp /> 
      </div>            
    </div>
  );
}

export default App;