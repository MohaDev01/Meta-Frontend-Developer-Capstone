import './BookingForm.css';
import React, { useState, useEffect } from 'react';
import RHSImg from '../assets/icons_assets/restauranfood.jpg';

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    numberOfPeople: 1,
    date: '',
    time: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check form validity
    const { name, numberOfPeople, date, time } = formData;
    const isValid = name.length >= 3 &&
                    numberOfPeople >= 1 &&
                    date &&
                    time;
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
    <form onSubmit={handleSubmit} id="bookingForm">
      <div className="container">
        <div className="row">
          <h1>Table Reservation</h1>
          <div className="col-6">
            <div className="container block">
              <label htmlFor="name">Name:</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="3"
                />
            </div>
            <div className="container block">
              <label htmlFor="numberOfPeople">Number of People:</label>
              <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  required
                  min="1"
                  max="10"
                />
            </div>
            <div className="container block">
              <label htmlFor="date">Date:</label>
              <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className="container block">
              <label htmlFor="time">Time:</label>
              <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              <button type="submit" disabled={!isFormValid}>Submit</button>
            </div>
          </div>
          <div className="col-6">
            <img src={RHSImg} className="img-fluid" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;