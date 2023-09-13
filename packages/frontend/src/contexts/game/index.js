import { createContext } from 'react';

export const initialGameState = {
  stage: 'playing', // setup, playing, complete
  currentPlayer: 1,
  players: {
    1: {
      name: 'Player 1',
      number: 1,
      score: 0,
    },
    2: {
      name: 'Player 2',
      number: 2,
      score: 0,
    },
  },
};

export const GameContext = createContext(initialGameState);
