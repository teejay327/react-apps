import sunImg from '../../../../../../src/assets/sunny.png'
import './Header.css';


const Header = () => {

  return (
    <div className='header'>
      <img src={ sunImg } alt="Sun weather" />
      <h1>WeatherLink</h1>
    </div>
  )
}

export default Header;