import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className='navbar-container'>

          <ul >
            <li className='navbar-elements'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='navbar-elements'>
              <NavLink to="/location">Location</NavLink>
            </li>
            <li className='navbar-elements'>
              <NavLink to="/today">Today's forecast</NavLink>
            </li> 
            <li className='navbar-elements'>
              <NavLink to="/5days">5-day forecast</NavLink>
            </li>
            <li className='navbar-elements'>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>

      </div>


    </nav>    
  )
}

export default Navbar;