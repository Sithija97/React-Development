const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { count: state.count + 1 };
    case "counter/decremented":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
