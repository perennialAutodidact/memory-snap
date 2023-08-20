import { createContext } from "react";

export const baseState = {
  setup: {
    currentStep: 1,
    totalSteps: 3,
  },
  game: {
    stage: "setup",
    currentPlayer: "player1",
    players: {
      player1: {
        name: "Player 1",
        score: 0,
      },
      player2: {
        name: "Player 2",
        score: 0,
      },
    },
  },
};

export const GameContext = createContext(baseState);
