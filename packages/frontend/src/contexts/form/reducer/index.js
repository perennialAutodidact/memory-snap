import types from 'contexts/form/actions/types';
import { initialFormState } from '../';

export const formReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.UPDATE_FORM: {
      return {
        ...state,
        currentStep: state.currentStep++,
        formValues: {
          ...state.formValues,
          ...action.payload,
        },
      };
    }

    case types.RESET_FORM: {
      return {
        ...initialFormState,
        currentStep: 1,
        formValues: { imageSearchTerm: null },
      };
    }

    default: {
      return state;
    }
  }
};
