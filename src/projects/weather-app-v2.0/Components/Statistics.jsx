

import './Statistics.css';
import uvIndex from '../assets/UVIndex.png';
import wind from '../assets/Wind.png';
import rain from '../assets/rainy-outline.svg';

const Statistics = () => {

  return (
    <div className='statistics'>
      <p> Possible showers</p>
      
      <div className='statistics-section'>
        <div className='stats-icon'>
          <img src={ rain } alt='Rainfall'/>
        </div>
        <div className='stats-text'>
          <div className='stats-text-title'>
            Chance of rain:
          </div>
          <div className='stats-text-numbers'>
            <div>PROPS.CHANCE</div>
          </div>
        </div>
      </div>

      <div className='statistics-section'>
        <div className='stats-icon'>
          <svg width="40px" height="40px" viewBox="0 0 46 46">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#98cfdc" cx="23" cy="23" r="23"></circle>
              <g transform="translate(15 9)">
                <rect stroke="#000000" stroke-width="1.7" x="0.85" y="0.85" width="15.3" height="26.118" rx="1"></rect>
                <path stroke="#000000" stroke-width="1.7" stroke-linecap="round" d="M11 11.5h5M11 16.5h5M11 6.5h5"></path>
                <path d="M16 20.853c-.28.595-1.635.893-4.065.893C8.767 21.746 7.961 20 4.921 20c-1.316 0-2.623.284-3.921.853V27h15v-6.147z" fill="#000000"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className='stats-text'>
          <div className='stats-text-title'>
            Amount of rain:
          </div>
          <div className='stats-text-numbers'>
            <div>PROPS.AMOUNT</div>
          </div>
        </div>
      </div>

      <div className='statistics-section'>
        <div className='stats-icon'>
          <img src={ uvIndex } alt='UV Index'/>
        </div>
        <div className='stats-text'>
          <div className='stats-text-title'>
            UV Index:
          </div>
          <div className='stats-text-numbers'>
            <div>PROPS.UV</div>
          </div>
        </div>
      </div>

      <div className='statistics-section'>
        <div className='stats-icon'>
          <img src={ wind } alt='Wind'/>
        </div>
        <div className='stats-text'>
          <div className='stats-text-title'>
            Wind speed:
          </div>
          <div className='stats-text-numbers'>
            <div>PROPS.WIND</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Statistics;