// ACTIONS
export function loadingStart() {
  return dispatch => dispatch({ type: 'LOADING_START' });
}

export function loadingStop() {
  return dispatch => dispatch({ type: 'LOADING_STOP' });
}

// REDUCERS

const INITIAL_STATE = {
  counter: 0,
};

export const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return { ...state, counter: state.counter + 1 };
    case 'LOADING_STOP':
      if (state.counter > 1) return { ...state, counter: state.counter - 1 };
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
