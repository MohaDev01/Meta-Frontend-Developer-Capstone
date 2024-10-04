import './BookingForm.css';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function BookingForm ({ submitForm}) {
  const [formData, setFormData] = useState({
    numberOfGuests: 1,
    date: '',
    time: '',
    occasion: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const { numberOfGuests, date, time, occasion } = formData;
    const isValid = numberOfGuests >= 1 &&
                    date &&
                    time &&
                    occasion;
    setIsFormValid(isValid);
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
      submitForm(formData);
    }
  };
  return (
    <div className="container" id="bookingForm">
      <div className="row wrapper">
        <div className="col-12 pt-2 heading">
          <h4>Table reservation</h4>
        </div>
        <div className="col d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="col">
              <div className="row group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" name="guests" id="guests" min="1" max="5" value={formData.numberOfGuests} onChange={handleChange} required />
              </div>
              <div className="row group">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="row group">
                <label htmlFor="time" >Time</label>
                <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} required />
              </div>
              <div className="row group">
                <label htmlFor="occasion" >Occasion</label>
                <select className="form-select" name="occasion" id="occasion" value={formData.occasion} onChange={handleChange} required>
                  <option value="select">Select</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
              <div className="row pt-5">
                <button className="btn" type="submit" aria-current="page" to="/confirmed-booking">
                  Reserve now!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};