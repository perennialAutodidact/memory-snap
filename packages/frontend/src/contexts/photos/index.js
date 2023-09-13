import { createContext } from 'react';

export const initialPhotosState = {
  photos: null,
  loading: false,
};

export const PhotosContext = createContext(initialPhotosState);
