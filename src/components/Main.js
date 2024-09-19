import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../utilities/API';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate(); // Hook for navigation

  // Function to submit form data
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('confirmed-booking'); // Update to full path for confirmation
    }
  };

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
}

export default Main;
