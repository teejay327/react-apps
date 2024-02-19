import DATA from '../data.js';
import './Summary.css';

const Summary = () => {

  return (
    <div className='summary'>
       <div className='summary-titles'>
          <p>Currently</p>
          <div className='summary-amounts'>
            { DATA.forecast.temperature } &#8451;
         </div>
       </div>
       <div className='summary-titles'>
          <p>Humidity</p>
          <div className='summary-amounts'>{ DATA.forecast.humidity }</div>
       </div>
       <div className='summary-titles'>
          <p>Rain since 9am</p>
          <div className='summary-amounts'>{ DATA.forecast.rainfall }</div>
       </div>
       <div className='summary-titles'>
          <p>Wind</p>
          <div className='summary-amounts'>{ DATA.forecast.wind }</div>
       </div>
    </div>
  )
}

export default Summary;