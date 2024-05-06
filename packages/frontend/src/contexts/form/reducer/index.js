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
      };
    }
    default: {
      return state;
    }
  }
};
