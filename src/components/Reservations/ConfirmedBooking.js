import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="container" id="confirmed-booking">
      <div className="row">
        <div className="col-12">
          <div className="card text-center">
            <h1 className="card-header bg-warning">Booking Confirmed!</h1>
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