
import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = { house: House, bedroomQuantity: 1, bathroomQuantity: 1, carpetArea: 510, totalCost: 0, floorPrice: 0, wallCost: 0, floorCost: 0 };

export const HouseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {


    bathroomIncrement: (state, action) => {
      state.house.push(action.payload)
      state.carpetArea += 40
      state.bathroomQuantity = state.bathroomQuantity + 1;
    },

    bathroomDecrement: (state) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bathroom ${state.bathroomQuantity}`;
      });
      state.house = newArray;
      if (state.bathroomQuantity > 1) {
        state.bathroomQuantity = state.bathroomQuantity - 1;

      }

    },
    bedroomIncrement: (state, action) => {
      state.house.push(action.payload)
      state.carpetArea += 120
      state.bedroomQuantity = state.bedroomQuantity +1;

    },
    bedroomDecrement: (state) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bedroom ${state.bedroomQuantity}`;
      });
      state.house = newArray;
      if(state.bedroomQuantity>1){
        state.bedroomQuantity = state.bedroomQuantity - 1
      }
    },
    setID: (state) => {
      state.house.forEach((el) => {
        const id = el.title.toLowerCase().replaceAll(" ", "");
        el.id = id;
      })
    },

    totalExpense: (state, action) => {

      state.totalCost = action.payload;
    },

    flooringPrice: (state, action) => {

      // eslint-disable-next-line
      state.house.map((room) => {

        if (room.id === action.payload.roomID) {
          return room.floorCost = action.payload.floors.cost;
        }
      })
    },

    wallsdesigningPrice: (state, action) => {
      // eslint-disable-next-line
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          return room.wallCost = action.payload.walls.cost;
        }
      })
    },

  },




});

export const {
  totalExpense, wallsdesigningPrice,
  setID, bathroomIncrement, bedroomIncrement, bathroomDecrement, bedroomDecrement, flooringPrice
} = HouseSlice.actions;

export default HouseSlice.reducer;