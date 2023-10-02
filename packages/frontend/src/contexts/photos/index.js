import { createContext } from 'react';

export const initialPhotosState = {
  error: null,
  photos: null,
  status: 'IDLE', // IDLE, PENDING, SUCCESS, ERROR
};

export const PhotosContext = createContext(initialPhotosState);
