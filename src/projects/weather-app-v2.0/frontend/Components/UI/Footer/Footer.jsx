import facebook from '../../../../assets/logos/facebook.png';
import instagram from '../../../../assets/logos/instagram.png';
import twitter from '../../../../assets/logos/twitter.png';

import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  
  return (
    <footer>
      <nav className="footer-nav">
        <ul>
          <div className="footer-logo">
          <li>
            <h3>WeatherLink</h3>
          </li>
          </div>

          <div className="footer-socialmedia">
            <li>
              <a className="socialmedia" href="https://www.facebook.com/login.php">
                <img src={ facebook } alt="Facebook logo" width="30" height="30"></img>
              </a>
            </li>
            <li>
              <a className="socialmedia" href="https://www.instagram.com/accounts/login/">
                <img src={ instagram } alt="Instagram logo" width="30" height="30"></img>
              </a>
            </li>
            <li>
              <a className="socialmedia" href="https://twitter.com/login">
                <img src={ twitter } alt="Twitter logo" width="30" height="30"></img>
              </a>
            </li>
          </div>

          <div className="footer-notes">
            <li>
              <div>WeatherLink &copy;{ currentYear }</div>
            </li>
          </div>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;