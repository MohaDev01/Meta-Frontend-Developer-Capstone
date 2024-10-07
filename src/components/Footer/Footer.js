import './Footer.css';
import FooterLogo from '../../assets/images/logos/footer-logo.png';
import { Link } from 'react-router-dom';
import X from '../../assets/images/footer/x.png';
import Instagram from '../../assets/images/footer/instagram.png';
import YouTube from '../../assets/images/footer/youtube.png';
import Facebook from '../../assets/images/footer/facebook.png';
import Location from '../../assets/images/footer/location.png';
import Phone from '../../assets/images/footer/phone.png';
import Mail from '../../assets/images/footer/mail.png';

function Footer () {
  return (
      <footer className="container-fluid" id="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 pb-5 pb-md-5 pb-lg-0 footerLogo">
              <img src={FooterLogo} className="img-fluid" alt="Little Lemon" loading='lazy' />
            </div>
            <nav className="col-12 col-md-6 col-lg-3 pb-md-5 pb-lg-0 navContainer">
              <h4>FOOTER MENU</h4>
              <ul>
                <li>
                  <Link aria-current="page" to="/">Home</Link>
                </li>
                <li>
                  <Link aria-current="page" to="/about">About</Link>
                </li>
                <li>
                  <Link aria-current="page" to="/menu">Menu</Link>
                </li>
                <li>
                  <Link aria-current="page" to="/reservations">Reservations</Link>
                </li>
                <li>
                  <Link aria-current="page" to="/order-online">Order Online</Link>
                </li>
                <li>
                  <Link aria-current="page" to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <div className="col-12 col-md-6 col-lg-3 pt-5 pt-md-5 pt-lg-0 contactContainer">
              <h4>CONTACT US</h4>
              <address>
                <li>
                  <p>
                    <img src={Location} className="img-fluid" alt="Location:" loading="lazy" />
                    123 Fake Ave, Kurdistan
                  </p>
                </li>
                <li>
                  <p>
                    <img src={Phone} className="img-fluid" alt="Phone Number:" loading="lazy" />
                    +1 (012) 345-6789
                  </p>
                </li>
                <li>
                  <p>
                    <img src={Mail} className="img-fluid" alt="Contact Us at:" loading="lazy" />
                    info@littlelemon.com
                  </p>
                </li>
              </address>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-5 pt-md-5 pt-lg-0 connectContainer">
              <h4 className="text-start">CONNECT WITH US</h4>
              <ul className="text-start d-flex">
                <li>
                  <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                    <img src={X} className="img-fluid" alt="X" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={Instagram} className="img-fluid" alt="Instagram" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="htttps://www.youtube.com/" target="_blank" rel="noreferrer">
                    <img src={YouTube} className="img-fluid" alt="YouTube" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={Facebook} className="img-fluid" alt="Facebook" loading="lazy" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;