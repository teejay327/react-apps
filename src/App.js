import WeatherApp from './projects/weather-app-v2.0/Components/WeatherApp.jsx';
import { DATA } from './data.js'; 
import Header from './components/UI/Header/Header';
import Navbar from './components/UI/Navbar/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import './components/UI/Header/Header.css';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
        <BrowserRouter >
          <Navbar />
        </BrowserRouter >
      <WeatherApp />
    </div>
  );
}

export default App;