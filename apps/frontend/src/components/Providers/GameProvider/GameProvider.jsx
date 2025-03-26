import React, { useReducer, useEffect, useRef } from 'react';
import { GameContext } from '@/contexts/GameContext';
import { baseState } from '@/contexts';
import { usePhotosContext } from '@/hooks/usePhotosContext';
import proptypes from '@/proptypes';

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [gameState, gameDispatch] = useReducer(
    GameContext.reducer,
    initialState,
  );
  const { gameActions } = GameContext;

  const {
    photosState: { currentPhotos },
  } = usePhotosContext();

  const tilesCreated = useRef(false);
  useEffect(() => {
    if (currentPhotos && !tilesCreated.current) {
      gameDispatch(gameActions.addTiles(currentPhotos));
      tilesCreated.current = true;
    }
  }, [currentPhotos]);

  return (
    <GameContext.Provider value={{ gameState, gameDispatch, gameActions }}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = proptypes.App.Providers.GameProvider;

export default GameProvider;
