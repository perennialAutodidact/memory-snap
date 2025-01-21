import { createContext } from 'react';
import { LOADING_STATUSES } from '@/utils/loadingStatuses';
import { photosActions } from './actions';
import { photosReducer } from './reducer';
import { mockPhotos } from '@memory-snap/common/__mocks__';
import { shouldUseTestData } from '@/utils/tests/shouldUseTestData';

const useTestData = shouldUseTestData(import.meta.env);
const initialPhotos = useTestData ? mockPhotos : null;

const initialPhotosState = {
  error: null,
  currentPhotos: initialPhotos,
  status: LOADING_STATUSES.IDLE,
  imageSearchQuery: '',
  quantity: 2,
};

const PhotosContext = createContext(initialPhotosState);
PhotosContext.photosActions = photosActions;
PhotosContext.reducer = photosReducer;

export { initialPhotosState, PhotosContext };
