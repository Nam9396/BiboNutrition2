import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './2-foodDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodInDay } from "../store/foodInDaySlice";
const shortid = require("shortid");

const FoodDetail = () => {
  const navigate = useNavigate();
  const [ amount, setAmount ] = useState('')
  const [ state, setState ] = useState('');
  const foodName = useSelector(state => state.foodName);
  const mealName = useSelector(state => state.mealName);
  const dispatch= useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setFoodInDay({
      id: shortid.generate(),
      name: foodName.name,
      group: foodName.group,
      amount: amount,
      state: state,
      mealName: mealName,
    }));
    navigate('/addFood');
  };

  return (
    <div className="outer-box">
      <form className="food-detail" onSubmit={handleSubmit}>
        <div className="exit-button-box">
            <button 
                className="exit-button" 
                onClick={(e) => {
                e.stopPropagation();
                navigate('/addFood');
                }}
            ><span class="material-symbols-outlined" style={{fontSize: "16px"}}>
            undo
            </span></button>
        </div>
        <div className="img-box">
          <img alt="food" src={foodName.img} />
        </div>
        <div className="food-detail-name">{foodName.name}</div>

        <div className="amount-option">
          {foodName.amountOption.map(amount => (
            <div className="amount" key={amount.state} >
              <input
                type="radio"
                id={amount.state}
                name="foodAmount"
                value={amount.text}
                required
                checked={state === amount.state}
                onChange={() => {
                  setAmount(amount.text);
                  setState(amount.state);
                }}
              />
              <label htmlFor={amount.state}>{amount.text}</label>
            </div>
          ))}
        </div>

        <button className="food-detail-submit" type="submit">Lưu</button>

      </form>
    </div>
  )
};

export default FoodDetail;
