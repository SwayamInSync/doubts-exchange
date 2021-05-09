const initialState = {
  loading: false,
  data: [],
  username: "",
};

const myFeedsReducer = (state = initialState, action) => {
  if (action.type === "GETTING_FEEDS") {
    return { ...state, loading: true };
  }
  if (action.type === "SUCCESS_ALL_FEEDS") {
    return {
      ...state,
      data: action.payload.feeds.posts,
      username: action.payload.feeds.username,
      loading: false,
    };
  }

  return state;
};

export default myFeedsReducer;
