import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from 'contexts/game';
import { baseState } from 'contexts';
import { gameReducer } from 'contexts/game/reducer';

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

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
