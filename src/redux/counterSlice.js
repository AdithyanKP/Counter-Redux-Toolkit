import { createSlice } from "@reduxjs/toolkit";

//declaration of initialState//
const initialState = {
  count: 0,
};

//createSlice function redux-toolkit syntax//
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

//exports//
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
