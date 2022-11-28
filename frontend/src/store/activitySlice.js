import { createSlice } from "@reduxjs/toolkit";

const activitySlice = createSlice({
  name: "activity",
  initialState: [],
  reducers: {
    setActivity: (state, action) => {
      state.push(action.payload);
    },
  }
});

export const activitySliceReducer = activitySlice.reducer;
export const { setActivity } = activitySlice.actions;

export const selectActivity = (state) => state.activity;
export const activityInHour = (state) => {
  const acvitityInMinute = selectActivity(state);
  let sumTime = 0;
  for (let i = 0; i < acvitityInMinute.length; i++) {
    sumTime += parseInt(acvitityInMinute[i]);
  }
  const activityInHour = (sumTime / 60).toFixed(2);
  if (activityInHour >= 3) {
    return {
      width: '100%',
      message: 'Bé đã vận động đủ thời gian trong một ngày, hãy tiếp tục động viên con nhé!',
      hour: activityInHour
    }
  } else {
    return {
      width: `${activityInHour / 3 * 100}%`,
      message: 'Bạn đã vận động không đủ thời gian trong ngày, hãy tạo điều kiện để giúp con vận động nhiều hơn bạn nhé',
      hour: activityInHour
    }
  }
};
