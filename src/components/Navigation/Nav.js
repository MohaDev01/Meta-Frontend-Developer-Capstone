import './Nav.css';
import LittleLemonLogo from '../../assets/images/logos/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
function Nav () {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav-bar">
        <a className="navbar-brand" href="." rel="noreferrer">
          <img src={LittleLemonLogo} alt="Little Lemon" loading="lazy" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
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
          </ul>
          <ul className="navbar-nav d-flex flex-row justify-content-center">
            <li className="nav-item">
              <Link className="btn btn-outline-dark px-4" aria-label="Log in" aria-current="page" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;