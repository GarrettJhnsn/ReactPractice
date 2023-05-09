import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    cart: cartSlice,
  },
});

export default store;
