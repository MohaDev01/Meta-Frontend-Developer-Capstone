import Main from '../Main/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';
function Reservations () {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="confirmed-booking" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Reservations;