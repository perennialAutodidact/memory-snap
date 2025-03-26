import types from '../actions/types';

export const photosReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.SET_FAIL: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case types.SET_PHOTOS: {
      return {
        ...state,
        currentPhotos: action.payload.photos,
      };
    }

    case types.SET_STATUS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    default: {
      return state;
    }
  }
};
