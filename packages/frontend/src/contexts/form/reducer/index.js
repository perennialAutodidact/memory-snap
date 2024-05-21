import types from 'contexts/form/actions/types';

export const formReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.UPDATE_FORM: {
      const tempPlayerNames = state.formValues.playerNames;
      if (state.currentStep === 1) {
        tempPlayerNames[0] = action.payload.value;
        const tempFormValues = {
          ...state.formValues,
          playerNames: tempPlayerNames,
        };
        return {
          ...state,
          currentStep: state.currentStep + 1,
          formValues: tempFormValues,
        };
      } else if (state.currentStep === 2) {
        tempPlayerNames[1] = action.payload.value;
        const tempFormValues = {
          ...state.formValues,
          playerNames: tempPlayerNames,
        };
        return {
          ...state,
          currentStep: state.currentStep + 1,
          formValues: tempFormValues,
        };
      } else if (state.currentStep === 3) {
        const tempFormValues = {
          ...state.formValues,
          numberOfTiles: action.payload.value,
        };
        return {
          ...state,
          currentStep: state.currentStep + 1,
          formValues: tempFormValues,
        };
      } else if (state.currentStep === 4) {
        const tempFormValues = {
          ...state.formValues,
          photoQuery: action.payload.value,
        };
        return {
          ...state,
          formValues: tempFormValues,
        };
      }
      break;
    }

    default: {
      return state;
    }
  }
};
