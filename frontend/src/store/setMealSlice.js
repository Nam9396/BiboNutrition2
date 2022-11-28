import { createSlice } from "@reduxjs/toolkit";

const setMealSlice = createSlice({
  name: "mealName",
  initialState: null,
  reducers: {
    setMealName: (state, action) => {
      return action.payload;
    },
  }
});

export const setMealSliceReducer = setMealSlice.reducer;
export const { setMealName } = setMealSlice.actions;