const initialState = {
  history: [],
  results: [],
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_QUERY':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;