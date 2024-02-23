import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card component', () => {
  const cardData = { rank: 'King', suit: 'Hearts' };

  test('renders without crashing', () => {
    render(<Card card={cardData} />);
  });

  test('generates the correct image file name', () => {
    render(<Card card={cardData} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/resources/cards/king_of_hearts.png');
  });

  test('sets alt text correctly for accessibility', () => {
    render(<Card card={cardData} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('alt', 'King of Hearts');
  });

  test('handles numeric card ranks correctly', () => {
    const numericCard = { rank: '10', suit: 'Diamonds' };
    render(<Card card={numericCard} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/resources/cards/10_of_diamonds.png');
  });
});
