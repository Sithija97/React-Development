import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item, id) => id !== action.payload.id);
      state.total = state.total - action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
