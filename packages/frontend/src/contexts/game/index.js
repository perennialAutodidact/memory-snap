import { createContext } from 'react';

export const initialGameState = {
  stage: 'playing', // setup, playing, complete
  currentPlayer: {
    name: 'Player 1',
    number: 1,
    score: 0,
  },
  players: [
    {
      name: 'Player 1',
      number: 1,
      score: 0,
      color: '#3a96cf',
    },
    {
      name: 'Player 2',
      number: 2,
      score: 0,
      color: '#ed6b86',
    },
  ],
  tiles: [],
  flipped: [],
  turnCount: 1,
};

export const GameContext = createContext(initialGameState);
