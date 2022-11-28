import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setActivity } from "../store/activitySlice";

const ActivitySlider = ({name}) => {
  const [ time, setTime ] = useState();
  const dispatch = useDispatch();

  const addActivity = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setActivity(time));
  }

  return (
    <form className="slider-box" onSubmit={addActivity}>
        <div className="activity-name">{name}</div>
        <div className="slider-part">
          <div className="slidecontainer">
            <input 
              type="range" 
              min="0" max="180" className="slider" value={time || 10} id="myRange" step="10" 
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <p>{time}</p>
          <button className="slider-button" type="submit">Thêm</button>
        </div> 
    </form>
  )
};

export default ActivitySlider;