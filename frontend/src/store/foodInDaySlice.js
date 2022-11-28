import { createSlice } from "@reduxjs/toolkit";

const foodInDaySlice = createSlice({
  name: "foodInDay",
  initialState: [],
  reducers: {
    setFoodInDay: (state, action) => {
      state.push(action.payload);
    },
    removeFood: (state, action) => {
      const index = state.findIndex(element => element.id === action.payload);
      state.splice(index, 1);
    },
  }
});

export const foodInDaySliceReducer = foodInDaySlice.reducer;
export const { setFoodInDay, removeFood } = foodInDaySlice.actions;
export const selectFoodInDay = (state) => state.foodInDay;

export const breakfast = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const breakfast = foodInDayArray.filter(elemenet => 
    elemenet.mealName === 'Buổi sáng'
  );
  return breakfast;
};

export const lunch = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const lunch = foodInDayArray.filter(elemenet => 
    elemenet.mealName === 'Buổi trưa'
  );
  return lunch;
};

export const dinner = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const dinner = foodInDayArray.filter(elemenet => 
    elemenet.mealName === 'Buổi tối'
  );
  return dinner;
};

export const snack1 = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const snack1 = foodInDayArray.filter(elemenet => 
    elemenet.mealName === 'Buổi ăn nhẹ sáng'
  );
  return snack1;
};

export const snack2 = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const snack2 = foodInDayArray.filter(elemenet => 
    elemenet.mealName === 'Buổi ăn nhẹ chiều'
  );
  return snack2;
};

export const snack3 = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const snack3 = foodInDayArray.filter(elemenet => 
    elemenet.mealName === 'Buổi ăn nhẹ tối'
  );
  return snack3;
};

// starch, fruitVege, milk, protein, fatSugar

export const starchData = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const starch = foodInDayArray.filter(elemenet => 
    elemenet.group === 'starch'
  );
  if (starch.length >= 5) {
    return {
      width: '100%',
      message: 'Chúc mừng bạn, bé đã ăn đủ lượng tinh bột cần thiết, hãy tiếp tục cố gắng nhé!',
      portion: '5 khẩu phần'
    }
  } else if (starch.length === 4) {
    return {
      width: '80%',
      message: 'Bé sắp đạt đủ lượng tinh bột theo khuyến cáo, chỉ cần ăn thêm một ít nữa. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần thức ăn giàu tinh bột mỗi ngày, bé cần thêm 1 khẩu phần nữa là đủ',
      portion: '4 khẩu phần'
    }
  } else if (starch.length === 3) {
    return {
      width: '60%',
      message: 'Bé không ăn đủ lượng tinh bột cần thiết. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần thức ăn giàu tinh bột mỗi ngày',
      portion: '3 khẩu phần'
    }
  } else if (starch.length === 2) {
    return {
      width: '40%',
      message: 'Bé không ăn đủ lượng tinh bột cần thiết. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần thức ăn giàu tinh bột mỗi ngày',
      portion: '3 khẩu phần'
    }
  } else if (starch.length === 1) {
    return {
      width: '20%',
      message: 'Bé không ăn đủ lượng tinh bột cần thiết. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần thức ăn giàu tinh bột mỗi ngày',
      portion: '1 khẩu phần'
    }
  } else {
    return {
      width: '0%',
      message: 'Cảnh báo! bé không ăn các thực phẩm giàu tinh bột trong ngày, điều này rất nguy hiểm. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần thức ăn giàu tinh bột mỗi ngày',
      portion: '0 khẩu phần'
    }
  }
};

export const fruitVegeData = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const fruitVege = foodInDayArray.filter(elemenet => 
    elemenet.group === 'fruitVege'
  );
  if (fruitVege.length >= 5) {
    return {
      width: '100%',
      message: 'Good job!, bé đã ăn đủ lượng rau xanh và trái cây cần thiết trong một ngày, hãy tiếp tục cố gắng nhé',
      portion: '5 khẩu phần'
    }
  } else if (fruitVege.length === 4) {
    return {
      width: '80%',
      message: 'Bé sắp đạt đủ lượng rau xanh và trái cây theo khuyến cáo, chỉ cần ăn thêm một ít nữa. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần rau xanh và trái cây mỗi ngày, bé cần thêm 1 khẩu phần nữa là đủ!',
      portion: '4 khẩu phần'
    }
  } else if (fruitVege.length === 3) {
    return {
      width: '60%',
      message: 'Bé không ăn đủ lượng rau xanh và trái cây cần thiết. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần rau xanh và trái cây mỗi ngày',
      portion: '3 khẩu phần'
    }
  } else if (fruitVege.length === 2) {
    return {
      width: '40%',
      message: 'Bé không ăn đủ lượng rau xanh và trái cây cần thiết. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần rau xanh và trái cây mỗi ngày',
      portion: '2 khẩu phần'
    }
  } else if (fruitVege.length === 1) {
    return {
      width: '20%',
      message: 'Bé không ăn đủ lượng rau xanh và trái cây cần thiết. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần rau xanh và trái cây mỗi ngày',
      portion: '1 khẩu phần'
    }
  } else {
    return {
      width: '0%',
      message: 'Cảnh báo! bé không ăn rau xanh và trái cây trong ngày. Trẻ từ 1 - 5 tuổi nên ăn 5 khẩu phần rau xanh và trái cây mỗi ngày',
      portion: '0 khẩu phần'
    }
  }
};

export const milkData = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const milk = foodInDayArray.filter(elemenet => 
    elemenet.group === 'milk'
  );
  if (milk.length >= 4) {
    return {
      width: '60%',
      message: 'Hãy cẩn thận, uống quá nhiều sữa có thể không tốt cho bé, đặc biệt nếu con ăn không đủ. Trẻ dưới 5 tuổi không nên uống quá 600ml sữa bò mỗi ngày. Bé nên uống 2 - 3 cốc sữa (100 - 120ml) một ngày là tốt nhất',
      portion: 'Nhiều hơn 4 khẩu phần'
    }
  } else if (milk.length === 3) {
    return {
      width: '60%',
      message: 'Bé đã uống (ăn) đủ lượng sữa cần thiết trong một ngày, bạn làm rất tốt! ',
      portion: '3 khẩu phần'
    }
  } else if (milk.length <= 2 && milk.length > 0) {
    return {
      width: '20%',
      message: 'Bé không uống (ăn) đủ sữa và các sản phẩm làm từ sữa trong một ngày. Trẻ từ 1 - 5 tuổi nên uống 2 - 3 cốc sữa (100 - 120ml) mỗi ngày là tốt nhất ',
      portion: '1 - 2 khẩu phần'
    }
  } else {
    return {
      width: '0%',
      message: 'Hãy cẩn thận, bé không uống sữa trong ngày, điều này có thể khiến trẻ thiếu vitamin D và canxi. Trẻ từ 1 - 5 tuổi nên uống 2 - 3 cốc sữa (100 - 120ml) mỗi ngày',
      portion: '0 khẩu phần'
    }
  }
};

export const proteinData = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const protein = foodInDayArray.filter(elemenet => 
    elemenet.group === 'protein'
  );
  if (protein.length >= 2) {
    return {
      width: '40%',
      message: 'Bé đã ăn đủ lượng protein (thịt, cá, đậu) cần thiết, bạn đã làm rất tốt!',
      portion: '2 - 3 khẩu phần'
    }
  } else if (protein.length === 1) {
    return {
      width: '20%',
      message: 'Bé cần thêm một khẩu phần thịt - cá - đậu nữa sẽ đáp ứng đủ nhu cầu protein theo khuyến cáo. Trẻ từ 1 - 5 tuổi nên ăn ít nhất 2 khẩu phần thịt, cá, đậu mỗi ngày',
      portion: '1 khẩu phần'
    }
  } else {
    return {
      width: '0%',
      message: 'Hãy cẩn thận, bé không ăn đủ lượng protein (thịt, cá, đậu). Trẻ từ 1 - 5 tuổi nên ăn ít nhất 2 khẩu phần thịt, cá, đậu mỗi ngày',
      portion: '0 khẩu phần'
    }
  }
};

export const fatSugarData = (state) => {
  const foodInDayArray = selectFoodInDay(state);
  const fatSugar = foodInDayArray.filter(elemenet => 
    elemenet.group === 'fatSugar'
  );
  if (fatSugar.length > 1) {
    return {
      width: '25%',
      message: 'Bé đã ăn nhiều bánh kẹo hơn khuyến cáo, điều này có thể khiến trẻ bị béo phì. Trẻ chỉ nên ăn 1 khẩu phần bánh kẹo mỗi ngày và uống nước ngọt 1 lần/tuần',
      portion: 'Nhiều hơn 1 khẩu phần'
    }
  } else if (fatSugar.length === 1) {
    return {
      width: '20%',
      message: 'Bạn đã làm đúng, trẻ từ 1 - 5 tuổi chỉ nên ăn 1 khẩu phần bánh kẹo mỗi ngày và uống nước ngọt 1 lần/tuần',
      portion: '1 khẩu phần'
    }
  } else {
    return {
      width: '0%',
      message: 'Bạn đã làm đúng, trẻ từ 1 - 5 tuổi chỉ nên ăn 1 khẩu phần bánh kẹo mỗi ngày và uống nước ngọt 1 lần/tuần, hoặc ít hơn càng tốt',
      portion: '0 khẩu phần'
    }
  }
};