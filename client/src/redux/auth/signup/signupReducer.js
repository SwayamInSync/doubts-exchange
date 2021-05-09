const initialState = {
  error: "",
  message: "",
  loading: false,
};

const signupReducer = (state = initialState, action) => {
  if (action.type === "CLEAR_MESSAGE") {
    return { ...state, message: "" };
  }
  if (action.type === "LOADING_END") {
    return { ...state, loading: false };
  }
  if (action.type === "LOADING_START") {
    return { ...state, loading: true };
  }
  if (action.type === "SIGNUP_SUCCESS") {
    return { ...state, message: "success, you are logged in" };
  }
  if (action.type === "SIGNUP_ERROR") {
    return { ...state, error: "failed to signup" };
  }
  if (action.type === "CLEAR_ERROR") {
    return { ...state, error: "" };
  }
  if (action.type === "PASSWORD_NOT_MATCH") {
    return { ...state, error: "password not matched" };
  }
  return state;
};

export default signupReducer;
