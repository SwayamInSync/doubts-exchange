const initialState = {
  feeds: [],
  loading: false,
};

const feedReducer = (state = initialState, action) => {
  if (action.type === "FETCHING_SOLVED") {
    return { ...state, loading: true };
  }
  if (action.type === "SUCCESS_SOLVED") {
    return { ...state, feeds: action.payload.allFeeds, loading: false };
  }
  return state;
};

export default feedReducer;
