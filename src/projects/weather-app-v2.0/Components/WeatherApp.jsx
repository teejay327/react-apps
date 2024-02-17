import CurrentStats from './CurrentStats';
import './WeatherApp.css';

const WeatherApp = (props) => {

  return (
    <div className='weatherapp-container'>
      <CurrentStats />
      <div className='weatherapp-forecast' >
        <p>Forecast</p>
        <p>26 degrees</p>
      </div>
      <div className='weatherapp-stats' >
        <p>stats</p>
        <p>2ml</p>
      </div>
    </div>
  )
}

export default WeatherApp;