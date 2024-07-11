import { configureStore } from "@reduxjs/toolkit";
import { UiReducer } from "./Slices/UiSlice";

const store = configureStore({
  reducer: {
    ui: UiReducer,
  },
});
export default store;
