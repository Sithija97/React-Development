const Increment = () => {
  return {
    type: "counter/incremented",
    payload: 0,
  };
};

const Decrement = () => {
  return {
    type: "counter/decremented",
    payload: 0,
  };
};

const Reset = () => {
  return {
    type: "counter/reset",
    payload: 0,
  };
};

export { Increment, Decrement, Reset };
