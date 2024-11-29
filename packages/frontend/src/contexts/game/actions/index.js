import types from './types';

export const updateNames = formValues => ({
  type: types.UPDATE_NAMES,
  payload: formValues,
});

export const updateStage = stage => ({
  type: types.UPDATE_STAGE,
  payload: stage,
});

export const addTiles = photos => ({
  type: types.ADD_TILES,
  payload: { photos },
});

export const flipTile = tile => ({
  type: types.FLIP_TILE,
  payload: { tile },
});

export const handleFlippedPair = tiles => ({
  type: types.HANDLE_FLIPPED_PAIR,
  payload: { tiles },
});

export const handleGameOver = () => ({
  type: types.HANDLE_GAME_OVER,
});

export const resetGame = () => ({
  type: types.RESET_GAME,
});
