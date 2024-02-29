import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from 'contexts/game/index.js';
import { addTiles } from 'contexts/game/actions';
import { baseState } from 'contexts';
import { gameReducer } from 'contexts/game/reducer';
import usePhotosContext from 'hooks/usePhotosContext';

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const {
    state: { photos },
  } = usePhotosContext();

  const { tiles } = state;

  useEffect(() => {
    if (photos && tiles.length === 0) {
      dispatch(addTiles(photos));
    }
  }, [photos, tiles]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node,
  providedState: PropTypes.object,
};

export default GameProvider;
