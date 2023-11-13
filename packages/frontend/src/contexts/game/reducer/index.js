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
          action.payload.tile.id === tile.id
            ? { ...tile, faceUp: !tile.faceUp, isFlippable: false }
            : tile
        ),
        flipped: state.flipped.concat(action.payload.tile),
      };

    case types.RESET_TILES:
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.tiles[0].id === tile.id ||
          action.payload.tiles[1].id === tile.id
            ? { ...tile, faceUp: !tile.faceUp, isFlippable: true }
            : tile
        ),
        flipped: [],
      };

    case types.HANDLE_MATCH:
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.tiles[0].id === tile.id ||
          action.payload.tiles[1].id === tile.id
            ? { ...tile, isMatched: !tile.isMatched }
            : tile
        ),
        flipped: [],
      };

    //TODO: reset game action to reset all tiles

    case types.TOGGLE_LOCK:
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.locked === true
            ? { ...tile, isFlippable: false }
            : { ...tile, isFlippable: true }
        ),
      };

    default: {
      return state;
    }
  }
};
