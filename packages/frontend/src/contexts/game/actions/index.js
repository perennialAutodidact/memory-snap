import types from './types';

export const addTiles = (photos) => ({
  type: types.ADD_TILES,
  payload: { photos },
});

export const flipTile = (tile) => ({
  type: types.FLIP_TILE,
  payload: { tile },
});

export const resetTiles = (tiles) => ({
  type: types.RESET_TILES,
  payload: { tiles },
});

export const handleMatch = (tiles) => ({
  type: types.HANDLE_MATCH,
  payload: { tiles },
});

export const toggleLock = (locked) => ({
  type: types.TOGGLE_LOCK,
  payload: { locked },
});
