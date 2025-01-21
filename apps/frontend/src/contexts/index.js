import { initialFormState, FormContext } from './FormContext';
import { initialGameState, GameContext } from './GameContext';
import { initialPhotosState, PhotosContext } from './PhotosContext';

const baseState = {
  form: initialFormState,
  game: initialGameState,
  photos: initialPhotosState,
};

export { baseState, FormContext, GameContext, PhotosContext };
