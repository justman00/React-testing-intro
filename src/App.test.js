import React from 'react';
import { render, screen, queryByText } from '@testing-library/react';
import App from './App';

test('renders App without errors', () => {
  render(<App />);
});

test('renders heading with the right text', () => {
  // AAA
  // arrange
  const { queryByText } = render(<App />);

  // act
  const headingText = queryByText(/add new animal/i);

  // assert
  expect(headingText).toBeInTheDocument();
});

test('renders styles accordingly', () => {
  // arrange - act
  const { container } = render(<App />);

  // assert - snapshot testing
  expect(container).toMatchSnapshot();
});
