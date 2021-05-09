export const getFeed = (id) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await fetch(`/view-post/${id}`);
    const data = await response.json();
    dispatch({ type: "SUCCESS", payload: { query: data } });
  };
};
