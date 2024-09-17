import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
