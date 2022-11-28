import { createSlice } from "@reduxjs/toolkit";

const setFoodSlice = createSlice({
  name: "foodName",
  initialState: null,
  reducers: {
    setFoodName: (state, action) => {
      return action.payload;
    },
  }
});

export const setFoodSliceReducer = setFoodSlice.reducer;
export const { setFoodName } = setFoodSlice.actions;