import { createContext } from 'react';

export const initialFormState = {
  currentStep: 1,
  totalSteps: 4,
  formValues: {
    player1Name: 'abc',
    player2Name: 'abc',
    tileNumber: 10,
    imageSearchQuery: 'cat',
  },
};

export const FormContext = createContext(initialFormState);
