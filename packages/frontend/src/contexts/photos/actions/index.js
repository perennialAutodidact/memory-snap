import types from './types';

export const setPhotos = (photos) => {
  if (!Array.isArray(photos)) throw new TypeError('photos must be an array');
  return {
    type: types.SET_PHOTOS,
    payload: { photos },
  };
};

export const setStatus = (status) => {
  const allowedStatuses = ['error', 'idle', 'pending', 'success'];
  if (!allowedStatuses.includes(status)) {
    throw new Error(`status must be one of: ${allowedStatuses.join(' ')}`);
  }
};
