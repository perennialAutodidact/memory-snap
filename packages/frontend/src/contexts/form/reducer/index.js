import types from 'contexts/form/actions/types';
import { advanceStep } from 'helpers/advanceStage';

export const formReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.UPDATE_FORM: {
      const tempFormValues = state.formValues;
      tempFormValues[state.currentStep - 1] = action.payload;
      return {
        ...state,
        currentStep: advanceStep(state.currentStep),
        formValues: tempFormValues,
      };
    }

    default: {
      return state;
    }
  }
};
