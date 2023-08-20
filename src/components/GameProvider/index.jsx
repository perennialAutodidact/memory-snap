import React, { useReducer } from "react";
import { GameContext } from "contexts/game";
import { baseState } from "contexts/game";
import { gameReducer } from "contexts/game/reducer";

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
