export const gameReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case 'LOAD_TILES':
      return {
        ...state,
        tiles: action.payload.tiles,
      };
    default: {
      return state;
    }
  }
};
