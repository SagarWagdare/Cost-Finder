
import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = { house: House, carpetArea: 510 };

export const HouseSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    setID: (state)=>{
      state.house.forEach((el)=>{
        const id = el.title.toLocaleLowerCase().replaceAll("","");
        el.id = id;
      })
    },
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

      // state.house.pop();


      if (action.payload > 1) {
        state.carpetArea -= 120;
      }
    }
  },
});

export const {
  setID, bathroomIncrement, bedroomIncrement, bathroomDecrement, bedroomDecrement
} = HouseSlice.actions;

export default HouseSlice.reducer;