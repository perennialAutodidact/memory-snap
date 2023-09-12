import types from './types';

export const addTiles = (tiles) => ({
  type: types.ADD_TILES,
  payload: { tiles },
});
