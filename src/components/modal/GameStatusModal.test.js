import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameStatusModal from './GameStatusModal';

// Test: Component renders the correct status message and color
test('displays the correct status message and color for each game status', () => {
  const { rerender } = render(<GameStatusModal status="PLAYER_WINS" onPlayAgain={() => {}} />);
  expect(screen.getByText("Congratulations, You Win!")).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /play again/i })).toBeInTheDocument();
  expect(screen.getByText("Congratulations, You Win!").closest('.status-modal')).toHaveStyle('background-color: green');

  rerender(<GameStatusModal status="DEALER_WINS" onPlayAgain={() => {}} />);
  expect(screen.getByText("Sorry, Dealer Wins!")).toBeInTheDocument();
  expect(screen.getByText("Sorry, Dealer Wins!").closest('.status-modal')).toHaveStyle('background-color: red');

  rerender(<GameStatusModal status="TIE" onPlayAgain={() => {}} />);
  expect(screen.getByText("It's a Tie!")).toBeInTheDocument();
  expect(screen.getByText("It's a Tie!").closest('.status-modal')).toHaveStyle('background-color: orange');

  rerender(<GameStatusModal status="UNKNOWN_STATUS" onPlayAgain={() => {}} />);
  expect(screen.getByText("Game Over!")).toBeInTheDocument();
  expect(screen.getByText("Game Over!").closest('.status-modal')).toHaveStyle('background-color: grey');
});

// Test: "Play Again" button click calls the onPlayAgain prop
test('"Play Again" button click calls the onPlayAgain prop', () => {
  const onPlayAgain = jest.fn();
  render(<GameStatusModal status="PLAYER_WINS" onPlayAgain={onPlayAgain} />);

  fireEvent.click(screen.getByRole('button', { name: /play again/i }));
  expect(onPlayAgain).toHaveBeenCalledTimes(1);
});

