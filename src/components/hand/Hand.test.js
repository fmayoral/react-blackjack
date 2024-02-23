import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hand from './Hand';

test('renders without crashing', () => {
  render(<Hand hand={[]} total={0} label="Player" />);
});

test('displays the correct label and total', () => {
  render(<Hand hand={[]} total={21} label="Player" />);
  expect(screen.getByText('Player')).toBeInTheDocument();
  expect(screen.getByText('Total: 21')).toBeInTheDocument();
});

test('renders the correct number of Card components', () => {
  const hand = [{rank: 'K', suit: 'hearts'}, {rank: 'Q', suit: 'diamonds'}];
  
  // Destructure container directly from the render method
  const { container } = render(<Hand hand={hand} total={20} label="Player" />);

  // Get elements by class name using querySelectorAll
  const cards = container.querySelectorAll('.card');
  expect(cards).toHaveLength(2);
});