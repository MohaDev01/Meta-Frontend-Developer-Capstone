import './Footer.css';
import FooterImg from '../assets/icons_assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <footer>
      <ul className="container">
        <ul>
          <img src={FooterImg} alt="Footer Image" />
        </ul>
        <ul>
          <h4>Doormat Navigation</h4>
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
        <ul>
          <h4>Contact</h4>
          <li>
            <Link to="/address">Address</Link>
          </li>
          <li>
            <Link to="/phone-number">Phone number</Link>
          </li>
          <li>
            <Link to="/email">Email</Link>
          </li>
        </ul>
        <ul>
          <h4>Social Media Links</h4>
          <li>
            <Link to="/address">Address</Link>
          </li>
          <li>
            <Link to="/phone-number">Phone number</Link>
          </li>
          <li>
            <Link to="/email">Email</Link>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;