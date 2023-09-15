import { createContext } from 'react';

export const initialPhotosState = {
  photos: null,
  status: 'idle',
};

export const PhotosContext = createContext(initialPhotosState);
