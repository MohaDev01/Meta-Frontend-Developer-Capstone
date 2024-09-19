import './Footer.css';
import FooterImg from '../assets/icons_assets/footer-logo.png';
import { Link } from 'react-router-dom';
import X from '../assets/icons_assets/x.png';
import Instagram from '../assets/icons_assets/instagram.png';
import YouTube from '../assets/icons_assets/youtube.png';
import Facebook from '../assets/icons_assets/facebook.png';
import Location from '../assets/icons_assets/location.png';
import Phone from '../assets/icons_assets/phone.png';
import Mail from '../assets/icons_assets/mail.png';

function Footer () {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-3 logo">
            <img src={FooterImg} alt="Footer Image" className="img-fluid" />
          </div>
          <div className="col-3">
            <h4>Doormat Navigation</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <Link to="/address">
                  <img src={Location} />
                  123 Fake Ave, Kurdistan, IL 60602
                </Link>
              </li>
              <li>
                <Link to="/phone-number">
                  <img src={Phone} />
                  +1 (012) 345-6789
                </Link>
              </li>
              <li>
                <Link to="/email">
                  <img src={Mail} />
                  info@littlelemon.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Social Media Links</h4>
            <ul className="socials">
              <li>
                <Link to="https://www.x.com/" target="_blank">
                  <img src={X} className="img-fluid" />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/" target="_blank">
                  <img src={Instagram} className="img-fluid" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/" target="_blank">
                  <img src={YouTube} className="img-fluid" />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/" target="_blank">
                  <img src={Facebook} className="img-fluid" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;