// BookingForm.test.js
import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('should have required attributes on input fields', () => {
    const { getByLabelText } = render(<BookingForm submitForm={() => {}} />);

    // Name field
    const nameInput = getByLabelText(/Name:/i);
    expect(nameInput).toHaveAttribute('required');
    expect(nameInput).toHaveAttribute('minLength', '3');

    // Number of People field
    const numberOfPeopleInput = getByLabelText(/Number of People:/i);
    expect(numberOfPeopleInput).toHaveAttribute('required');
    expect(numberOfPeopleInput).toHaveAttribute('min', '1');
    expect(numberOfPeopleInput).toHaveAttribute('max', '10');

    // Date field
    const dateInput = getByLabelText(/Date:/i);
    expect(dateInput).toHaveAttribute('required');

    // Time field
    const timeInput = getByLabelText(/Time:/i);
    expect(timeInput).toHaveAttribute('required');
  });
});
