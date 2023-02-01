import { configureStore } from "@reduxjs/toolkit";
import HouseReducer from "./reducer";

export const store = configureStore({
  reducer: {
    home: HouseReducer,
  },
});