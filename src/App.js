import WeatherApp from './projects/weather-app-v2.0/Components/WeatherApp.jsx';
import Header from './projects/weather-app-v2.0/Components/UI/Header/Header.jsx';
import Navbar from './projects/weather-app-v2.0/Components/UI/Navbar/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import './projects/weather-app-v2.0/Components/UI/Header/Header.css';
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
        <div className='weather-container'>
          <WeatherApp />  
        </div>       
      </div>
    </div>
 
  );
}

export default App;