const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, count: state.count + 1 };
    case "counter/decremented":
      return { ...state, count: state.count - 1 };
    case "counter/reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
