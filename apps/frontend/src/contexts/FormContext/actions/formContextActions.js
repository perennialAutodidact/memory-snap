import types from './types';

export const updateForm = (value) => ({
  type: types.UPDATE_FORM,
  payload: value,
});

export const resetForm = () => ({
  type: types.RESET_FORM,
});

export const formActions = { updateForm, resetForm };
