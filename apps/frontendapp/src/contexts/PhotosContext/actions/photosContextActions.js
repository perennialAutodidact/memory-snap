import types from './types';

export const setError = error => {
  const message = 'An error message is required.';
  if (!error) throw new Error(message);

  return {
    type: types.SET_ERROR,
    payload: { error },
  };
};

export const setPhotos = photos => {
  if (!Array.isArray(photos)) throw new TypeError('photos must be an array');

  return {
    type: types.SET_PHOTOS,
    payload: { photos },
  };
};

export const resetPhotos = () => {
  return {
    type: types.RESET_PHOTOS,
  };
};

export const setStatus = status => {
  const allowedStatuses = ['ERROR', 'IDLE', 'PENDING', 'SUCCESS'];

  if (!allowedStatuses.includes(status)) {
    const message = [
      'status must be one of',
      allowedStatuses,
      'but received',
      status,
    ].join(' ');
    throw new Error(message);
  }

  return {
    type: types.SET_STATUS,
    payload: { status },
  };
};
