import DATA from '../data.js';
import './Summary.css';

const Summary = () => {

  return (
    <div className='summary'>
       <div className='summary-temperatures'>
          <p>Currently</p>
          <div>
            { DATA.forecast.temperature } &#8451;
         </div>
       </div>
       <div className='summary-humidity'>
          <p>Humidity</p>
          <div>{ DATA.forecast.humidity }</div>
       </div>
       <div className='summary-rainfall'>
          <p>Rain since 9am</p>
          <div>{ DATA.forecast.rainfall }</div>
       </div>
       <div className='summary-wind'>
          <p>Wind</p>
          <div>{ DATA.forecast.wind }</div>
       </div>
    </div>
  )
}

export default Summary;