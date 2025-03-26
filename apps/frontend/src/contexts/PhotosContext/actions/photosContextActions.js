import types from './types';
import { LOADING_STATUSES } from '@/utils';

export const setPhotosError = (error) => {
  const message = 'An error message is required.';
  if (!error) throw new Error(message);

  return {
    type: types.SET_FAIL,
    payload: { error },
  };
};

export const setPhotos = (photos) => {
  if (!Array.isArray(photos)) throw new TypeError('photos must be an array');

  return {
    type: types.SET_PHOTOS,
    payload: { photos },
  };
};

export const setPhotosStatus = (status) => {
  const allowedStatuses = Object.keys(LOADING_STATUSES);

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

export const photosActions = { setPhotos, setPhotosError, setPhotosStatus };
