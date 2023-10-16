import types from './types';

export const addTiles = (photos) => ({
  type: types.ADD_TILES,
  payload: { photos },
});

export const flipTile = (id) => ({
  type: types.FLIP_TILE,
  payload: [id],
});

export const resetTiles = (ids) => ({
  type: types.RESET_TILES,
  payload: ids,
});

export const handleMatch = (ids) => ({
  type: types.HANDLE_MATCH,
  payload: ids,
});
