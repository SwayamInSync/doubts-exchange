import axios from "axios";

export const getMyFeeds = (email) => {
  return async (dispatch) => {
    dispatch({ type: "GETTING_FEEDS" });
    const response = await axios.get("/my-feeds", {
      params: { email: email },
    });
    const data = await response.data;

    dispatch({ type: "SUCCESS_ALL_FEEDS", payload: { feeds: data } });
  };
};
