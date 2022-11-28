import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFoodName } from "../store/setFoodSlice";

const GroupFood = ({foodGroup}) => {
  const [ display, setDisplay ] = useState('none');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDisplay = (e) => {
    e.stopPropagation();
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };

  //list cac mon an trong nhom thuc an

  return (
    <div className="group-food-box">

        <div className="group-label" onClick={handleDisplay} >
          <div className="group-name">{foodGroup.category}</div>
          <button className="add-food-button">+</button>
        </div>

        <div className="food-list" style={{display: display}} >
          {foodGroup.data.map((food) => (

            <div 
              className="food-name"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setFoodName(food));
                navigate('/foodDetail');
              }}
              key={food.name}
            >{food.name}</div>

          ))}
          

        </div>
      
    </div>
  )
};

export default GroupFood;