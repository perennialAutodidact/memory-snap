import types from './types';

export const addTiles = (photos) => ({
  type: types.ADD_TILES,
  payload: { photos },
});

export const flipTile = (id) => ({
  type: types.FLIP_TILE,
  payload: [id],
});

export const resetTiles = (tiles) => ({
  type: types.RESET_TILES,
  payload: tiles,
});
