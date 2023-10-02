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
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          tile.id === action.payload.tile.id
            ? { ...tile, faceUp: !tile.faceUp }
            : tile
        ),
        flipped: state.flipped.concat(action.payload.tile.photo.id),
      };

    case types.RESET_TILES:
      console.log(action.payload.id[0], action.payload.id[1], 'PAYLOAD');

      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};
