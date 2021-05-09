const initialState = {
  user: undefined,
  loading: true,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === "SET_CURRENT_USER") {
    return { ...state, user: action.payload.user, loading: false };
  }

  return state;
};
