import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from 'contexts/game';
import { baseState } from 'contexts';
import { gameReducer } from 'contexts/game/reducer';
import { addTiles } from 'contexts/game/actions';
import { mockPhotos } from '__mocks__/api/mockPhotos';

const shufflePhotos = (photos) => {
  let currentIndex = photos.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [photos[currentIndex], photos[randomIndex]] = [
      photos[randomIndex],
      photos[currentIndex],
    ];
  }
  return photos;
};

const GameProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.game;
  const [state, dispatch] = useReducer(gameReducer, initialState);

  //should we eventually change this use effect to a useMemo?
  useEffect(() => {
    // change this to ladash duplicate *see note
    const unshuffledPhotos = [...mockPhotos].concat(mockPhotos);

    const tilePhotos = shufflePhotos(unshuffledPhotos);

    const tiles = [];

    tilePhotos.forEach((photo) => {
      tiles.push({
        isMatched: false,
        faceUp: false,
        photo: photo,
      });
      return tiles;
    });

    dispatch(addTiles(tiles));
  }, []);
  console.log(state, 'state tiles');
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
