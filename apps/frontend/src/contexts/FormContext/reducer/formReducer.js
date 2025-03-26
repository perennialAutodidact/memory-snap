import types from '@/contexts/FormContext/actions/types';
import { initialFormState } from '../FormContext';
import { produce } from 'immer';

export const formReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.UPDATE_FORM: {
      return produce(state, (draft) => {
        draft.step.current += 1;
        console.log({ state, payload: action.payload });
        draft.values = { ...state.values, ...action.payload };
      });
    }

    case types.RESET_FORM: {
      return produce(state, (draft) => {
        draft.step.current = 1;
        draft.values = initialFormState.values;
      });
    }

    default: {
      return state;
    }
  }
};
