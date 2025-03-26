import { createContext } from 'react';
import { testDataForSetupForm } from '@/__mocks__/data/setupForm';
import { formReducer } from './reducer';
import { formActions } from './actions';
import { isDevEnv } from '@/utils/tests/isDevEnv';

const useTestData = isDevEnv(import.meta.env);

const values = useTestData
  ? testDataForSetupForm
  : {
      player1Name: '',
      player2Name: '',
      tileQuantity: '20',
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
