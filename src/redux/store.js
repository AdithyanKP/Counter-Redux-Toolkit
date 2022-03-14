import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

//creation of store using configstore//
export const store = configureStore({
  //in here we add more reducers by seprating comma//
  reducer: { counter: counterReducer },
});
