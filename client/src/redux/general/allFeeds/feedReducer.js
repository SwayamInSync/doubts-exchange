const initialState = {
  feeds: [],
  loading: false,
};

const feedReducer = (state = initialState, action) => {
  if (action.type === "FETCHING") {
    return { ...state, loading: true };
  }
  if (action.type === "SUCCESS") {
    return { ...state, feeds: action.payload.allFeeds, loading: false };
  }
  return state;
};

export default feedReducer;
