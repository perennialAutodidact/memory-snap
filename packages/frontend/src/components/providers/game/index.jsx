import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from 'contexts/game';
import { baseState } from 'contexts';
import { gameReducer } from 'contexts/game/reducer';
import { addTiles } from 'contexts/game/actions';
import { mockPhotos } from '__mocks__/api/mockPhotos';

const shuffleTiles = (tiles) => {
  let currentIndex = tiles.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [tiles[currentIndex], tiles[randomIndex]] = [
      tiles[randomIndex],
      tiles[currentIndex],
    ];
  }
  return tiles;
};

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    // change this to ladash duplicate *see note
    const unshuffledTiles = [...mockPhotos].concat(mockPhotos);

    const tilePhotos = shuffleTiles(unshuffledTiles);
    dispatch(addTiles(tilePhotos));
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
