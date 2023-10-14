import types from '../actions/types';
import { createTilesFromPhotos } from 'helpers';

export const gameReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.ADD_TILES:
      return {
        ...state,
        tiles: createTilesFromPhotos(action.payload.photos, { shuffle: true }),
      };

    case types.FLIP_TILE:
      console.log(action.payload, 'FLIP_TILE PL');
      console.log(state.flipped, 'FLIPPED');
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.includes(tile.id)
            ? { ...tile, faceUp: !tile.faceUp }
            : tile
        ),
        flipped: state.flipped.concat(action.payload),
      };

    case types.RESET_TILES:
      console.log(action.payload, 'RESET PAYLOAD');
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.includes(tile.id)
            ? { ...tile, faceUp: !tile.faceUp }
            : tile
        ),
        flipped: [],
      };

    default: {
      return state;
    }
  }
};
