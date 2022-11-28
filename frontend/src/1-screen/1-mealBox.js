import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMealName } from "../store/setMealSlice";
import RecentAdd from "./recentAdd";

const MealBox = ({meal, foodRecent}) => {
  const [ displayRecent, setDisplayRecent ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleDisplayRecent = (e) => {
    e.stopPropagation();
    setDisplayRecent(!displayRecent);
  }

  //chon buoi an

  return (
    <div className="add-meal-box">
      <div>
        <div className="meal-label">
          <div className="meal-name">{meal}</div>  
          {/* //ex. buoi sang */}
          <div style={{display: "flex"}}>
            <button className="add-meal-button" onClick={handleDisplayRecent}><span className="material-symbols-outlined" style={{fontSize: '14px'}}>arrow_downward</span></button>
            <button className="add-meal-button" 
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setMealName(meal)); 
                navigate('/addFood');
              }}><span className="material-symbols-outlined" style={{fontSize: '14px'}}>add</span></button>
          </div>
        </div>
        
        {displayRecent && <RecentAdd foodRecent={foodRecent} />}
        
      </div>


    </div>
  ) 
};

export default MealBox;