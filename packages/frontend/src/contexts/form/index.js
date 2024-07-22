import { createContext } from 'react';

export const initialFormState = {
  currentStep: 1,
  totalSteps: 4,
  formValues: {},
};

export const FormContext = createContext(initialFormState);
