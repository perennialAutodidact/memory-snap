export const photosReducer = (state, action) => {
  if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  } else if (!state || (state && state.photos === undefined)) {
    throw new Error('please include a state object with a "photos" property');
  }

  switch (action.type) {
    default: {
      return state;
    }
  }
};
