import './BookingForm.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingForm () {
  return (
    <div className="container" id="bookingForm">
      <div className="row">
        <div className="col-12 pt-2 heading">
          <h4>Table reservation</h4>
        </div>
        <div className="col d-flex justify-content-center">
          <form>
            <div className="col">
              <div className="row group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" name="guests" id="guests" min="1" max="5" required />
              </div>
              <div className="row group">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" required />
              </div>
              <div className="row group">
                <label htmlFor="time" >Time</label>
                <input type="time" name="time" id="time" required />
              </div>
              <div className="row group">
                <label htmlFor="occasion" >Occasion</label>
                <select className="form-select" name="occasion" id="occasion" required>
                  <option selected>Select</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
              <div className="row pt-5">
                <Link className="btn" aria-current="page" to="/confirmed-booking">
                  Reserve now!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};