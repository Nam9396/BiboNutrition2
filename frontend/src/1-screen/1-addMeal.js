import React from "react";
import { useSelector } from "react-redux";
import { breakfast, dinner, lunch, snack1, snack2, snack3 } from "../store/foodInDaySlice";
import './1-addMeal.css';
import MealBox from "./1-mealBox";

const AddMeal = () => {
  const breakfastRecent = useSelector(breakfast);
  const lunchRecent = useSelector(lunch);
  const dinnerRecent = useSelector(dinner);
  const snack1Recent = useSelector(snack1);
  const snack2Recent = useSelector(snack2);
  const snack3Recent = useSelector(snack3);

  return (
    <div className="add-meal">
      <div className="add-meal-header">Thêm thức ăn </div>

      <MealBox
        meal={'Buổi sáng'}
        foodRecent={breakfastRecent}
      />
      <MealBox
        meal={'Buổi trưa'} 
        foodRecent={lunchRecent}
      />
      <MealBox
        meal={'Buổi tối'}
        foodRecent={dinnerRecent} 
      />
      <MealBox
        meal={'Buổi ăn nhẹ sáng'} 
        foodRecent={snack1Recent}
      />
      <MealBox
        meal={'Buổi ăn nhẹ chiều'}  
        foodRecent={snack2Recent}
      />
      <MealBox
        meal={'Buổi ăn nhẹ tối'}  
        foodRecent={snack3Recent}
      />
    </div>
  )
};

export default AddMeal;