const initialState = {
  count: 0,
};

const initialCart = {
  products: [
    { name: "Apple", price: 28 },
    { name: "Orange", price: 22 },
    { name: "Banana", price: 20 },
    { name: "Grapes", price: 16 },
    { name: "Avacado", price: 14 },
  ],
  cart: [],
  total: 0,
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

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case "ecom/purchase":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    case "ecom/remove":
      return {
        ...state,
        cart: state.cart.filter((item, id) => id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};
