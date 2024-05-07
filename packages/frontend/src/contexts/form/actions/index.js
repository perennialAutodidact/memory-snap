import types from './types';

export const enterP1Name = (name) => ({
  type: types.ENTER_P1_NAME,
  payload: { name },
});

export const enterP2Name = (name) => ({
  type: types.ENTER_P2_NAME,
  payload: { name },
});
