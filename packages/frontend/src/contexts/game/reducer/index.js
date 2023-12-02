import types from '../actions/types';
import { createTilesFromPhotos, lockTiles } from 'helpers';

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

    case types.FLIP_TILE: {
      if (!action.payload.tile.isFlippable) {
        return state;
      }

      let tempState = {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.tile.id === tile.id
            ? { ...tile, faceUp: true, isFlippable: false }
            : tile
        ),
        flipped: state.flipped.concat(action.payload.tile),
      };

      if (tempState.flipped.length === 2) {
        tempState = { ...tempState, tiles: lockTiles(tempState.tiles) };
      }

      return tempState;
    }

    case types.RESET_TILES:
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.tiles[0].id === tile.id ||
          action.payload.tiles[1].id === tile.id
            ? { ...tile, faceUp: !tile.faceUp, isFlippable: true }
            : { ...tile, isFlippable: true }
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
            : { ...tile, isFlippable: true }
        ),
        flipped: [],
      };

    default: {
      return state;
    }
  }
};
