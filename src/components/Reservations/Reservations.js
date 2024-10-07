import './Reservations.css';
import React, { useState, useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../../utilities/API';

// Initialize and update the available times using the fetchAPI
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

export default function Reservations() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [formData, setFormData] = useState({
    numberOfGuests: 1,
    date: '',
    time: '',
    occasion: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const { numberOfGuests, date, time, occasion } = formData;
      return numberOfGuests >= 1 &&
                      date &&
                      time &&
                      occasion;
    }
    setIsFormValid(validateForm());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      if(submitAPI(formData)) {
        setIsBookingConfirmed(true);
      }
    }
  };
  return (
    <section>
      {!isBookingConfirmed ? (
        <div className="container" id="bookingForm">
          <div className="row wrapper">
            <div className="col-12 pt-2 heading">
              <h4>Table Reservation</h4>
            </div>
            <div className="col d-flex justify-content-center">
              <form onSubmit={handleSubmit}>
                <div className="col">
                  <div className="row group">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                      type="number"
                      name="numberOfGuests"
                      id="guests"
                      min="1"
                      max="5"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      aria-label="Select number of guests"
                      required
                    />
                  </div>
                  <div className="row group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => {
                        handleChange(e);
                        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
                      }}
                      aria-label="Select date"
                      required
                    />
                  </div>
                  <div className="row group">
                    <label htmlFor="time">Time</label>
                    <select
                      type="time"
                      name="time"
                      id="time"
                      value={formData.time}
                      onChange={handleChange}
                      aria-label="Select time"
                      required
                    >
                      <option value="">Select Time</option>
                      {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div className="row group">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                      className="form-select"
                      name="occasion"
                      id="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      aria-label="Select occasion"
                      required
                    >
                      <option value="">Select</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                    </select>
                  </div>
                  <div className="row pt-5">
                    <button className="btn" type="submit" disabled={!isFormValid}>
                      Reserve Now!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container" id="confirmed-booking">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="card text-center border-0">
                <div className="card-header">
                  <h1>Booking Confirmed!</h1>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Your reservation has been successfully made. We look forward to seeing you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
