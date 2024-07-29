import Summary from './Summary';
import Statistics from './Statistics';
import './WeatherApp.css';

import { useState } from 'react';

const WeatherApp = (props) => {
  const [ location, setLocation ] = useState("");

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const locationData = {
      enteredLocation: location
    }

    console.log(locationData);
    setLocation('');
  }

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