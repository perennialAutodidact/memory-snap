import { createContext } from 'react';

export const initialPhotosState = {
  error: null,
  photos: null,
  status: 'IDLE', // IDLE, PENDING, SUCCESS, ERROR
  quantity: 4,
};

export const PhotosContext = createContext(initialPhotosState);
