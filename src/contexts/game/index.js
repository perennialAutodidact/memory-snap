import { createContext } from "react";

export const baseState = {
  setup: {
    currentStep: 1,
    totalSteps: 3,
    photos: [],
  },
  game: {
    stage: "playing", // setup, playing, complete
    currentPlayer: 1,
    players: {
      1: {
        name: "Player 1",
        score: 0,
      },
      2: {
        name: "Player 2",
        score: 0,
      },
    },
  },
};

export const GameContext = createContext(baseState);
