import { initialFormState } from './FormContext';
import { initialGameState } from './GameContext';
import { initialPhotosState } from './PhotosContext';

export const baseState = {
  form: initialFormState,
  game: initialGameState,
  photos: initialPhotosState,
};
