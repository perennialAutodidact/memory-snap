import types from './types';

export const updateForm = (value) => ({
  type: types.UPDATE_FORM,
  payload: { value },
});
