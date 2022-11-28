import React from "react";
import './2-addFood.css';
import GroupFood from "./2-groupFood";
import { useNavigate } from "react-router-dom";
import FoodData from "../data/foodData";

const AddFood = () => {
  const navigate = useNavigate();

  //chon nhom thuc an

  return (
    <div className="outer-box">
      <div className="add-food">
        <div className="add-food-header">
          <div className="add-food-label">Chọn món ăn</div>
          {/* //ex. nhom tinh bot */}
          <button 
            className="exit-button" 
            onClick={(e) => {
              e.stopPropagation();
              navigate('/');
            }}
          ><span class="material-symbols-outlined" style={{fontSize: '16px'}}>undo</span></button>
        </div>

        {FoodData.map(element => (
          <GroupFood 
            key={element.category}
            foodGroup={element} 
          />
        ))}
        
        

      </div>
    </div>
  )
};

export default AddFood;