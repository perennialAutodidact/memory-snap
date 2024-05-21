import { createContext } from 'react';

export const initialPhotosState = {
  error: null,
  photos: null,
  status: 'IDLE', // IDLE, PENDING, SUCCESS, ERROR
  quantity: 2,
};

export const PhotosContext = createContext(initialPhotosState);
