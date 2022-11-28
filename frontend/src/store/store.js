import { configureStore } from "@reduxjs/toolkit";
import { activitySliceReducer } from "./activitySlice";
import { foodInDaySliceReducer } from "./foodInDaySlice";
import { setFoodSliceReducer } from "./setFoodSlice";
import { setMealSliceReducer } from "./setMealSlice";

const store = configureStore({
  reducer: {
    foodName: setFoodSliceReducer,
    mealName: setMealSliceReducer,
    foodInDay: foodInDaySliceReducer,
    activity: activitySliceReducer
  }    
});

export default store;