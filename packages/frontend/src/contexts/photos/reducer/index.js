import types from '../actions/types';

export const photosReducer = (state, action) => {
  if (!state || (state && state.photos === undefined)) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.SET_PHOTOS: {
      return {
        ...state,
        photos: action.payload.photos,
      };
    }
    default: {
      return state;
    }
  }
};
