
import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = { house: House, carpetArea: 510, totalCost: 0, floorPrice: 0, wallCost: 0, floorCost: 0 };

export const HouseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

   
    bathroomIncrement: (state, action) => {
      state.house.push(action.payload)
      state.carpetArea += 40

    },
    bathroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bathroom ${action.payload}`;
      });
      state.house = newArray;

      if (action.payload > 1) {
        state.carpetArea -= 40;
      }
    },
    bedroomIncrement: (state, action) => {
      state.house.push(action.payload)
      state.carpetArea += 120

    },
    bedroomDecrement: (state, action) => {
      const newArray = state.house.filter((room) => {
        return room.title !== ` Bedroom ${action.payload}`;
      });
      state.house = newArray;



      if (action.payload > 1) {
        state.carpetArea -= 120;
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