import { createContext } from 'react';
import { testDataForSetupForm } from '@/__mocks__/data/setupForm';
import { formReducer } from './reducer';
import { formActions } from './actions';
import { shouldUseTestData } from '@/utils/tests/shouldUseTestData';

const useTestData = shouldUseTestData(import.meta.env);

const values = useTestData
  ? testDataForSetupForm
  : {
      player1Name: 'abc',
      player2Name: 'abc',
      tileQuantity: '10',
      imageSearchQuery: '',
    };

let initialFormState = {
  step: {
    current: 1,
    total: 4,
  },
  values,
};

const FormContext = createContext(initialFormState);
FormContext.formActions = formActions;
FormContext.reducer = formReducer;

export { initialFormState, FormContext };
