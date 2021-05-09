const initialState = {
  error: "",
  message: "",
  loading: false,
  redirect: false,
};

const loginReducer = (state = initialState, action) => {
  if (action.type === "CLEAR_MESSAGE") {
    return { ...state, message: "" };
  }
  if (action.type === "LOADING_END") {
    return { ...state, loading: false };
  }
  if (action.type === "LOADING_START") {
    return { ...state, loading: true };
  }
  if (action.type === "SIGNIN_SUCCESS") {
    return { ...state, message: "successfully logged in", redirect: true };
  }
  if (action.type === "SIGNIN_ERROR") {
    return {
      ...state,
      error: "failed to sigin, check your email and password",
    };
  }
  if (action.type === "CLEAR_ERROR") {
    return { ...state, error: "" };
  }
  if (action.type === "PASSWORD_NOT_MATCH") {
    return { ...state, error: "password not matched" };
  }
  return state;
};

export default loginReducer;
