import axios from "axios";

export const sendFeed = (query) => {
  return async (dispatch) => {
    dispatch({ type: "SENDING" });
    await axios.post("/get-query", query);
    dispatch({ type: "SUCCESSFULLY_DATA_SEND" });
  };
};
