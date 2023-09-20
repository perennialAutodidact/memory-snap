import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from 'contexts/game';
import { addTiles } from 'contexts/game/actions';
import { baseState } from 'contexts';
import { gameReducer } from 'contexts/game/reducer';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTiles } from 'helpers/createTiles';

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const gameTiles = createTiles(mockPhotos);
  useEffect(() => {
    dispatch(addTiles(gameTiles));
  }, []);

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
