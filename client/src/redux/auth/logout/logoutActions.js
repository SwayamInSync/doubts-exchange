import { auth } from "../../../firebase";

export const success = () => {
  return {
    type: "SIGNOUT_SUCCESS",
  };
};
export const failure = () => {
  return {
    type: "SIGNOUT_ERROR",
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(success());
    } catch (error) {
      dispatch(failure());
    }
  };
};
