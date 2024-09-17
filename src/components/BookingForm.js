import React, { useState, useEffect } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength="3"
        />
      </label>
      <label htmlFor="numberOfPeople">
        Number of People:
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
      </label>
      <label htmlFor="date">
        Date:
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="time">
        Time:
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
};

export default BookingForm;