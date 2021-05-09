const initialState = {
  error: "",
  message: "",
  loading: false,
};

const resetPasswordReducer = (state = initialState, action) => {
  if (action.type === "CLEAR_MESSAGE") {
    return { ...state, message: "" };
  }
  if (action.type === "LOADING_END") {
    return { ...state, loading: false };
  }
  if (action.type === "LOADING_START") {
    return { ...state, loading: true };
  }
  if (action.type === "RESET_SUCCESS") {
    return {
      ...state,
      message: "Email sent, check your inbox for further instructions",
    };
  }
  if (action.type === "RESET_ERROR") {
    return { ...state, error: "failed to reset" };
  }
  if (action.type === "CLEAR_ERROR") {
    return { ...state, error: "" };
  }

  return state;
};

export default resetPasswordReducer;
