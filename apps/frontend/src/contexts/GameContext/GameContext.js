import { createContext } from 'react';
import { GAME_STAGES } from '@/utils/stages';
import * as gameActions from './actions';
import { gameReducer } from './reducer';

const initialGameState = {
  currentStage: GAME_STAGES.SETUP,
  currentPlayer: {
    name: 'Player 1',
    index: 0,
    score: 0,
    color: {
      className: 'primary',
    },
  },
  players: [
    {
      name: 'Player 1',
      index: 0,
      score: 0,
      color: {
        className: 'primary',
      },
    },
    {
      name: 'Player 2',
      index: 1,
      score: 0,
      color: {
        className: 'secondary',
      },
    },
  ],
  tiles: {
    all: [],
    flipped: [],
    matched: [],
  },
  turnCount: 1,
  playerIndex: 0,
  highScore: 0,
  winner: {},
};

const GameContext = createContext(initialGameState);
GameContext.reducer = gameReducer;
GameContext.gameActions = gameActions;

export { initialGameState, GameContext };
