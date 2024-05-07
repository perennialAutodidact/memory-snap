import types from 'contexts/form/actions/types';

export const formReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.ENTER_P1_NAME: {
      const tempPlayerNames = state.formValues.playerNames;
      tempPlayerNames[0] = action.payload.name;
      const tempFormValues = {
        ...state.formValues,
        playerNames: tempPlayerNames,
      };
      return {
        ...state,
        currentStep: state.currentStep + 1,
        formValues: tempFormValues,
      };
    }
    case types.ENTER_P2_NAME: {
      const tempPlayerNames = state.formValues.playerNames;
      tempPlayerNames[1] = action.payload.name;
      const tempFormValues = {
        ...state.formValues,
        playerNames: tempPlayerNames,
      };
      return {
        ...state,
        currentStep: state.currentStep + 1,
        formValues: tempFormValues,
      };
    }
    default: {
      return state;
    }
  }
};
