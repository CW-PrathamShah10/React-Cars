// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //     carName: undefined,
  //     imageUrl: undefined,
  //     emiText: undefined,
  //     makeYear: undefined,
  //     price: undefined,
  //     km: undefined,
  //     fuel: undefined,
  //     cityName: undefined,
  // }
];
export const featureSlice = createSlice({
  name: "feature",
  initialState: initialState,
  reducers: {
    setApiData: (state, action) => {
      return action.payload;
    },
    setSortingStatus: (state, action) => {
      state.sorting = action.payload;
    }
  },
});

export const { setApiData, setSortingStatus} =
  featureSlice.actions;

export default featureSlice.reducer;
