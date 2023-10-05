import types from './types';

export const addTiles = (photos) => ({
  type: types.ADD_TILES,
  payload: { photos },
});

export const flipTile = (tile) => ({
  type: types.FLIP_TILE,
  payload: { tile },
});
