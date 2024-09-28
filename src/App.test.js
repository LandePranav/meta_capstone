import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByLabelText("Time :");
  expect(linkElement).toBeInTheDocument();
});


