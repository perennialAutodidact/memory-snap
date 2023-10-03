import { createContext } from 'react';

export const initialPhotosState = {
  photos: null,
  loading: false,
  quantity: 4,
};

export const PhotosContext = createContext(initialPhotosState);
