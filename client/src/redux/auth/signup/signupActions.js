import axios from "axios";
import { auth } from "../../../firebase";

export const success = () => {
  return {
    type: "SIGNUP_SUCCESS",
  };
};
export const failure = () => {
  return {
    type: "SIGNUP_ERROR",
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
export const passwordNotMatch = () => {
  return {
    type: "PASSWORD_NOT_MATCH",
  };
};
export const signup = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(clearMessage());
      dispatch(startLoading());
      dispatch(ClearError());
      await auth.createUserWithEmailAndPassword(email, password);
      const data = {
        email: email,
        username: name,
      };
      await axios.post("/new-user", data);
      dispatch(success());
    } catch (error) {
      dispatch(failure());
    }

    dispatch(endLoading());
  };
};
