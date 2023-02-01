import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  //   image: "",
  //   productName: "Transformer Chair",
  //   typeOfProduct: "",
  cartItems: [],
  //   quantity: 0,
};

export const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    openCloseCart: (state, action) => {
      state.isCartOpen = !state.isCartOpen;
    },
    changeQuantity: (state, action) => {
      state.cartItems.quantity = action.payload;
    },
    removeFromCart: (state, action) => {
      // const index = state.cartItems.indexOf(action.payload);
      state.cartItems.map((item, index) => {
        if (
          item.singleProduct[0].productInfo.id === action.payload &&
          index > -1
        ) {
          state.cartItems.splice(index, 1);
        }
      });
    },
  },
});

export const { addToCart, openCloseCart, changeQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
