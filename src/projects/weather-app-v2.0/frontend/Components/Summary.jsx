import DATA from '../../backend/data.js';
import './Summary.css';

const Summary = () => {

  return (
    <div className='summary'>

      <div className='summary-section'>
         <div className='summary-titles'>
            <p>Currently</p>
         </div>
         <div className='summary-amounts'>
            { DATA.forecast.temperature } &#8451;
         </div>
      </div>

      <div className='summary-section'>
         <div className='summary-titles'>
            <p>Humidity</p>
         </div>
         <div className='summary-amounts'>
            { DATA.forecast.humidity }
         </div>
      </div>   

      <div className='summary-section'>
         <div className='summary-titles'>
            <p>Rain since 9am</p>
         </div>
         <div className='summary-amounts'>
            { DATA.forecast.rainfall }
         </div>
      </div> 
      
      
      <div className='summary-section'>
         <div className='summary-titles'>
            <p>Wind</p>
         </div>   
         <div className='summary-amounts'>
            { DATA.forecast.wind }
         </div>
      </div> 
    </div>
  )
}

export default Summary;