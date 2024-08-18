import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('check testing in the App ', () => {
  render(<App />);
  let txt = screen.getByText("Test Check");
  expect(txt).toBeInTheDocument();
  
});