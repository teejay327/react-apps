import DATA from '../data.js';
import './Summary.css';

const Summary = (props) => {

  return (
    <div className='current-summary'>
       <div className='current-summary-temperatures'>
          <p>Currently</p>
          <div>{ DATA.forecast.temperature } &#8451;</div>
       </div>
       <div className='current-summary-humidity'>
          <p>Humidity</p>
          <div>{ DATA.forecast.humidity }</div>
       </div>
       <div className='current-summary-rainfall'>
          <p>Rain since 9am</p>
          <div>{ DATA.forecast.rainfall }</div>
       </div>
       <div className='current-summary-wind'>
          <p>Wind</p>
          <div>{ DATA.forecast.wind }</div>
       </div>
    </div>
  )
}

export default Summary;