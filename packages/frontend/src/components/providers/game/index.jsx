import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from 'contexts/game';
import { baseState } from 'contexts';
import { gameReducer } from 'contexts/game/reducer';
import { addTiles } from '../../contexts/game/actions';
import { mockPhotos } from 'components/__mocks__/mockPhotos';

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const tilePhotos = mockPhotos
    dispatch(addTiles({tilePhotos}))
  },[])

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
