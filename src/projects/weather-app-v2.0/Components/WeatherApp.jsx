import Summary from './Summary';
import './WeatherApp.css';

const WeatherApp = (props) => {

  return (
    <div className='weatherapp-container'>
      <div className='weatherapp-forecast'>
        <div className='weatherapp-container-title'>
          <h2>Today</h2>
        </div>      
        <Summary />
      </div>
      <div className='weatherapp-stats' >

      </div>
    </div>
  )
}

export default WeatherApp;