import './Nav.css';
import Logo from '../assets/icons_assets/Logo.svg';
function Nav () {
  return (
    <nav className="navbar navbar-expand-lg bg-body">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">
          <img src={Logo} className="img-fluid" alt="Little Lemon Logo" />
        </a>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Reservations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Order Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;