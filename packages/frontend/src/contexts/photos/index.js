import { createContext } from 'react';
import { baseState } from 'contexts';

export const PhotosContext = createContext(baseState.photos);
