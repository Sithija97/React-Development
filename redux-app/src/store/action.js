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

const AddToCart = (item) => {
  return { type: "ecom/purchase", payload: item };
};

const RemoveFromCart = (item) => {
  return { type: "ecom/remove", payload: item };
};

export { Increment, Decrement, Reset, AddToCart, RemoveFromCart };
