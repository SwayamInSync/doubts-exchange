import { auth } from "../../../firebase";

export const success = () => {
  return {
    type: "SIGNIN_SUCCESS",
  };
};
export const failure = () => {
  return {
    type: "SIGNIN_ERROR",
  };
};
export const clearMessage = () => {
  return {
    type: "CLEAR_MESSAGE",
  };
};
export const ClearError = () => {
  return {
    type: "CLEAR_ERROR",
  };
};
export const startLoading = () => {
  return {
    type: "LOADING_STARTS",
  };
};
export const endLoading = () => {
  return {
    type: "LOADING_END",
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(clearMessage());
      dispatch(startLoading());
      dispatch(ClearError());
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(success());
    } catch (error) {
      dispatch(failure());
    }

    dispatch(endLoading());
  };
};
