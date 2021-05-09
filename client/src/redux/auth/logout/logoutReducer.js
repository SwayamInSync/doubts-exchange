const initialState = {
  error: "",
  redirect: false,
};

const logoutReducer = (state = initialState, action) => {
  if (action.type === "SIGNOUT_SUCCESS") {
    return { ...state, redirect: true };
  }
  if (action.type === "SIGNOUT_ERROR") {
    return { ...state, error: "failed to signout" };
  }
  return state;
};

export default logoutReducer;
