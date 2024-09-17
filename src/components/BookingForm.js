import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (event) => {
    dispatch({
      type: 'UPDATE_TIMES',
      payload: event.target.value,
    });
    setFormData({
      ...formData,
      date: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData); // Call submitForm with the formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
