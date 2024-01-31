import { createContext } from 'react';

export const initialGameState = {
  stage: 'PLAYING', // setup, playing, complete
  currentPlayer: {
    name: 'Player 1',
    number: 1,
    score: 0,
    color: {
      className: 'primary',
    },
  },
  players: [
    {
      name: 'Player 1',
      number: 1,
      score: 0,
      color: {
        className: 'primary',
      },
    },
    {
      name: 'Player 2',
      number: 2,
      score: 0,
      color: {
        className: 'secondary',
      },
    },
  ],
  tiles: [],
  flipped: [],
  turnCount: 1,
  playerIndex: 0,
  highScore: 0,
  winner: [],
};

export const GameContext = createContext(initialGameState);
