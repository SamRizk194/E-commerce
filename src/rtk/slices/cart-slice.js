import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {},
    clear: (state, action) => {},
  },
});
export const { addToCart, removeFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
