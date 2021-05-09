const initialState = {
  loading: false,
  messsage: "",
};

const sendFeedReducer = (state = initialState, action) => {
  if (action.type === "SENDING") {
    return { ...state, loading: true };
  }
  if (action.type === "SUCCESSFULLY_DATA_SEND") {
    return { ...state, loading: false, message: "Query Submitted" };
  }
  return state;
};

export default sendFeedReducer;
