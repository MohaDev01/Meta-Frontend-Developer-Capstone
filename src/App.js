import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Nav = React.lazy(() => import('./components/Navigation/Nav'));
const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Menu = React.lazy(() => import('./components/Menu/Menu'));
const Reservations = React.lazy(() => import('./components/Reservations/Reservations'));
const OrderOnline = React.lazy(() => import('./components/OrderOnline/OrderOnline'));
const Login = React.lazy(() => import('./components/Registration/Login'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations/*" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
