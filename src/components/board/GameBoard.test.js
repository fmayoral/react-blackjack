import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GameBoard from './GameBoard';
const mock = new MockAdapter(axios);

// Setup
const mockGameData = {
  gameId: 'abcd1234',
  dealer: {
    hand: [{rank: 'Q', suit: 'hearts'}],
    total: 10
  },
  player: {
    hand: [{rank: 'A', suit: 'spades'}],
    total: 11
  },
  status: 'IN_PROGRESS'
};

mock.onPost('/api/v1/blackjack/games').reply(201, mockGameData);

afterEach(() => {
  jest.clearAllMocks();
});

test('renders GameBoard and initiates a new game on mount', async () => {
  render(<GameBoard />);

  await waitFor(() => {
    expect(screen.getByText("Blackjack Game")).toBeInTheDocument();
    expect(screen.getByText("Dealer's Hand")).toBeInTheDocument();
    expect(screen.getByText("Your Hand")).toBeInTheDocument();
  });
});

test('loads new game data into the component state', async () => {
  render(<GameBoard />);

  await waitFor(() => {
    expect(screen.getByText("Total: 10")).toBeInTheDocument();
    expect(screen.getByText("Total: 11")).toBeInTheDocument();
  });
});

test('performs player action when Hit button is clicked', async () => {
  const updatedGameData = {
    ...mockGameData,
    player: {
      hand: [
        {rank: 'A', suit: 'spades'},
        {rank: 'K', suit: 'diamonds'}
      ],
      total: 21
    }
  };

  mock.onPost(`/api/v1/blackjack/games/${updatedGameData.gameId}`).reply(201, updatedGameData);

  render(<GameBoard />);
  await waitFor(() => {
    expect(screen.getByText('Blackjack Game')).toBeInTheDocument();
  });

  // Check for Hit button and click it.
  fireEvent.click(screen.getByText('Hit'));

  await waitFor(() => {
    expect(screen.getByText("Total: 21")).toBeInTheDocument();
  });
});