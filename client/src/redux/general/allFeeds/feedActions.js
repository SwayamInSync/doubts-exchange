export const fetchFeeds = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCHING" });
    const response = await fetch("/fetch-feeds");
    const data = await response.json();
    dispatch({ type: "SUCCESS", payload: { allFeeds: data } });
  };
};
