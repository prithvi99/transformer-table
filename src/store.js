import { configureStore } from "@reduxjs/toolkit";
import selectProductReducer from "./features/selectProduct/selectProductSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    updateImage: selectProductReducer,
    userCart: cartReducer,
  },
});
