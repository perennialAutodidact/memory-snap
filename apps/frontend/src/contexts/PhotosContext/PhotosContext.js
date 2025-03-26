import { createContext } from 'react';
import { LOADING_STATUSES } from '@/utils/loadingStatuses';
import { photosActions } from './actions';
import { photosReducer } from './reducer';

const initialPhotosState = {
  error: null,
  currentPhotos: null,
  status: LOADING_STATUSES.IDLE,
  imageSearchQuery: '',
  quantity: 10,
};

const PhotosContext = createContext(initialPhotosState);
PhotosContext.photosActions = photosActions;
PhotosContext.reducer = photosReducer;

export { initialPhotosState, PhotosContext };
