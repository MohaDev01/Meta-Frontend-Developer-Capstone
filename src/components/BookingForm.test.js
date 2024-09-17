import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm labels', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  
  // Test if the form labels are rendered correctly
  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText("Choose time");
  expect(timeLabel).toBeInTheDocument();

  const guestsLabel = screen.getByText("Number of guests");
  expect(guestsLabel).toBeInTheDocument();

  const occasionLabel = screen.getByText("Occasion");
  expect(occasionLabel).toBeInTheDocument();
});