import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="container" id="confirmed-booking">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="card text-center border-0">
            <div className="card-header">
              <h1>Booking Confirmed!</h1>
            </div>
            <div className="card-body">
              <p className="card-text">Your reservation has been successfully made. We look forward to seeing you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;