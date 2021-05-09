const initialState = {
  query: {},
  loading: false,
};

const singleFeedReducer = (state = initialState, action) => {
  if (action.type === "SUCCESS") {
    return { ...state, query: action.payload.query, loading: false };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  return state;
};

export default singleFeedReducer;
