import types from '../actions/types';
import { createTiles } from 'helpers';

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
        tiles: createTiles(action.payload.photos),
      };
    case types.FLIP_TILE:
      console.log('PAYLOAD', action.payload.tile.index);
      console.log('ID OF ONE OF EM', state.tiles[0].id);
      return {
        ...state,
        tiles: state.tiles.map((tile, index) =>
          index === action.payload.tile.index
            ? { ...tile, faceUp: !tile.faceUp }
            : tile
        ),
      };

    default: {
      return state;
    }
  }
};
