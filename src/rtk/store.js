import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/product-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
