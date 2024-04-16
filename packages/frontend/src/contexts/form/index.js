import { createContext } from 'react';

export const initialFormState = {
  currentStep: 4,
  totalSteps: 4,
  formValues: {
    playerNames: ['Player 1', 'Player 2'],
    numberOfTiles: 16,
    photoQuery: 'Cat',
  },
};

export const FormContext = createContext(initialFormState);
