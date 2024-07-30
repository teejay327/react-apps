import Summary from './Summary';
import Statistics from './Statistics';
import './WeatherApp.css';

const WeatherApp = (props) => {

  return (
    <div className='weatherapp-container'>
      <div className='weatherapp-summary'>
        <div className='weatherapp-container-title'>
          <h2>Today</h2>
        </div>      
        <Summary />
      </div>
      <div className='weatherapp-stats' >
        <div className='weatherapp-container-title'>
            <h2>Tomorrow</h2>
         </div> 
        <Statistics /> 
      </div>
    </div>
  )
}

export default WeatherApp;