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
          action.payload.id === tile.id
            ? { ...tile, faceUp: !tile.faceUp }
            : tile
        ),
        flipped: state.flipped.concat(action.payload),
      };

    case types.RESET_TILES:
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload[0].id === tile.id || action.payload[1].id === tile.id
            ? { ...tile, faceUp: !tile.faceUp }
            : tile
        ),
        flipped: [],
      };

    // TODO:
    // case types.HANDLE_MATCH:
    //   return {
    //     ...state,
    //   };

    //TODO: reset game action to reset all tiles

    default: {
      return state;
    }
  }
};
