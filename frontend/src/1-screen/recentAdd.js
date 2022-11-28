import React from "react";
import { useDispatch } from "react-redux";
import { removeFood } from "../store/foodInDaySlice";

const RecentAdd = ({foodRecent}) => {
  const dispatch = useDispatch();
  

  return (
    <div className="recent-add">
      {foodRecent.map(element => (
        <div className="recent-add-label" key={element.id}>
          <div>{element.name}</div>
        <button className="delete-food" onClick={(e) => {
          e.stopPropagation();
          dispatch(removeFood(element.id));
        }}>x</button>
      </div>
      ))}
    </div>
  )
};

export default RecentAdd;