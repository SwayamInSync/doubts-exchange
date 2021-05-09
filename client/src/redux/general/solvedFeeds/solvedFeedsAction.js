export const fetchSolvedFeeds = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCHING_SOLVED" });
    const response = await fetch("/fetch-solved-feeds");
    const data = await response.json();
    dispatch({ type: "SUCCESS_SOLVED", payload: { allFeeds: data } });
  };
};
