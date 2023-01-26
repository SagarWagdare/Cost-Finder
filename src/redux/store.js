// import { configureStore } from '@reduxjs/toolkit';
// import cartreducer from "./reducer";
//  export const store = configureStore({
//   cart:cartreducer,
// })

import { configureStore } from "@reduxjs/toolkit";
import HouseReducer from "./reducer";

export const store = configureStore({
  reducer: {
    home: HouseReducer,
  },
});