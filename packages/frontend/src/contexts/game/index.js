import { createContext } from 'react';
import { GAME_STAGES } from 'utils/stages';

export const initialGameState = {
  stage: GAME_STAGES.PLAYING, // SETUP, PLAYING, GAME_OVER
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
};

export const GameContext = createContext(initialGameState);
