import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dockerized react application text', () => {
  render(<App />);
  const textElement = screen.getByText(/Dockerized React Application/i);
  expect(textElement).toBeInTheDocument();
});