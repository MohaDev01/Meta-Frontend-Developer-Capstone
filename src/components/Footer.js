import './Footer.css';
import FooterImg from '../assets/icons_assets/restauranfood.jpg';
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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <ul>
          <h4>Contact</h4>
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/phone-number">Phone number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
        <ul>
          <h4>Social Media Links</h4>
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/phone-number">Phone number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;