import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';

const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Menu = React.lazy(() => import('./components/Menu/Menu'));
const Reservations = React.lazy(() => import('./components/Reservations/Reservations'));
const OrderOnline = React.lazy(() => import('./components/OrderOnline/OrderOnline'));
const Login = React.lazy(() => import('./components/Registration/Login'));

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
