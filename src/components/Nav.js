import './Nav.css';
import Logo from '../assets/icons_assets/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/reservations">Reservations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/order-online">Order Online</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;