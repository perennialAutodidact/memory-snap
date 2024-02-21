import { initialFormState } from './form';
import { initialGameState } from './game/index.js';
import { initialPhotosState } from './photos';

export const baseState = {
  form: initialFormState,
  game: initialGameState,
  photos: initialPhotosState,
};
