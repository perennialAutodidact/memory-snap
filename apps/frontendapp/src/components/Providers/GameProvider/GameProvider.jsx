import React, { useReducer, useEffect, useRef } from "react";
import { GameContext } from "@/contexts/GameContext";
import { baseState } from "@/contexts";
import { addTiles } from "@/contexts/GameContext/actions";
import { gameReducer } from "@/contexts/GameContext/reducer";
import { usePhotosContext } from "@/hooks/usePhotosContext";
import proptypes from "@/proptypes";

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const {
    state: { photos },
  } = usePhotosContext();

  const { tiles } = state;

  const tilesCreated = useRef(false);
  useEffect(() => {
    if (photos && !tilesCreated.current) {
      dispatch(addTiles(photos));
      tilesCreated.current = true;
    }
  }, [photos, tiles]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = proptypes.App.Providers.GameProvider;

export default GameProvider;
