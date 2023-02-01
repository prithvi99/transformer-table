import { createSlice } from "@reduxjs/toolkit";

export const selectProductSlice = createSlice({
  name: "selectProduct",
  initialState: { value: 0 },

  reducers: {
    selectType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectType } = selectProductSlice.actions;

export default selectProductSlice.reducer;
