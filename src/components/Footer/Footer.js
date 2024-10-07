import './Footer.css';
import FooterLogo from '../../assets/images/logos/footer-logo.webp';
import { Link } from 'react-router-dom';
import X from '../../assets/images/footer/x.webp';
import Instagram from '../../assets/images/footer/instagram.webp';
import YouTube from '../../assets/images/footer/youtube.webp';
import Facebook from '../../assets/images/footer/facebook.webp';
import Location from '../../assets/images/footer/location.webp';
import Phone from '../../assets/images/footer/phone.webp';
import Mail from '../../assets/images/footer/mail.webp';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Order Online', path: '/order-online' },
  { label: 'Login', path: '/login' },
];

const contactInfo = [
  { img: Location, text: '123 Fake Ave, Kurdistan', alt: 'Address: 123 Fake Ave, Kurdistan' },
  { img: Phone, text: '+1 (012) 345-6789', alt: 'Phone Number: +1 (012) 345-6789' },
  { img: Mail, text: 'info@littlelemon.com', alt: 'Email: info@littlelemon.com' },
];

const socialLinks = [
  { img: X, alt: 'X Social Media', href: 'https://www.x.com/' },
  { img: Instagram, alt: 'Instagram', href: 'https://www.instagram.com/' },
  { img: YouTube, alt: 'YouTube', href: 'https://www.youtube.com/' },
  { img: Facebook, alt: 'Facebook', href: 'https://www.facebook.com/' },
];

function Footer() {
  return (
    <footer className="container-fluid" id="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 pb-5 pb-md-5 pb-lg-0 footerLogo">
            <img src={FooterLogo} className="img-fluid" alt="Little Lemon Logo" loading='lazy' />
          </div>
          <nav className="col-12 col-md-6 col-lg-3 pb-md-5 pb-lg-0 navContainer">
            <h4>FOOTER MENU</h4>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link aria-current="page" to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-12 col-md-6 col-lg-3 pt-5 pt-md-5 pt-lg-0 contactContainer">
            <h4>CONTACT US</h4>
            <address>
              <ul>
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <p>
                      <img src={info.img} className="img-fluid" alt={info.alt} loading="lazy" />
                      {info.text}
                    </p>
                  </li>
                ))}
              </ul>
            </address>
          </div>
          <div className="col-12 col-md-6 col-lg-3 py-5 pt-md-5 pt-lg-0 connectContainer">
            <h4 className="text-start">CONNECT WITH US</h4>
            <ul className="text-start d-flex">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <img src={link.img} className="img-fluid" alt={link.alt} loading="lazy" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;