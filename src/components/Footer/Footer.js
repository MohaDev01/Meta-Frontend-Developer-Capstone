import './Footer.css';
import FooterLogo from '../../assets/icons_assets/footer-logo.png';
import { Link } from 'react-router-dom';
import X from '../../assets/icons_assets/x.png';
import Instagram from '../../assets/icons_assets/instagram.png';
import YouTube from '../../assets/icons_assets/youtube.png';
import Facebook from '../../assets/icons_assets/facebook.png';
import Location from '../../assets/icons_assets/location.png';
import Phone from '../../assets/icons_assets/phone.png';
import Mail from '../../assets/icons_assets/mail.png';

function Footer () {
  return (
      <footer className="container-fluid" id="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 pb-5 pb-md-5 pb-lg-0 footerLogo">
              <img src={FooterLogo} className="img-fluid" alt="Little Lemon Image" />
            </div>
            <nav className="col-12 col-md-6 col-lg-3 pb-md-5 pb-lg-0 navContainer">
              <h4>FOOTER MENU</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Reservations</a>
                </li>
                <li>
                  <a href="#">Order Online</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </nav>
            <div className="col-12 col-md-6 col-lg-3 pt-5 pt-md-5 pt-lg-0 contactContainer">
              <h4>CONTACT US</h4>
              <address>
                <li>
                  <p>
                    <img src={Location} className="img-fluid" alt="Location:" />
                    123 Fake Ave, Kurdistan
                  </p>
                </li>
                <li>
                  <p>
                    <img src={Phone} className="img-fluid" alt="Phone Number:" />
                    +1 (012) 345-6789
                  </p>
                </li>
                <li>
                  <p>
                    <img src={Mail} className="img-fluid" alt="Contact Us at:" />
                    info@littlelemon.com
                  </p>
                </li>
              </address>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-5 pt-md-5 pt-lg-0 connectContainer">
              <h4 className="text-start">CONNECT WITH US</h4>
              <ul className="text-start d-flex">
                <li>
                  <a href="https://www.x.com/" target="_blank">
                    <img src={X} className="img-fluid" alt="X" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src={Instagram} className="img-fluid" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="htttps://www.youtube.com/" target="_blank">
                    <img src={YouTube} className="img-fluid" alt="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <img src={Facebook} className="img-fluid" alt="Facebook" />
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