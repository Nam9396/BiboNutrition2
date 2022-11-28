import React from "react";
import { useSelector } from "react-redux";
import { fatSugarData } from "../store/foodInDaySlice";


const FastSugarComment = () => {
  const fatSugaInfo = useSelector(fatSugarData);
  const { width, message, portion } = fatSugaInfo;

  return (
    <div className="summary-box" style={{border: 'none'}}>
      <div className="summary-label">
        <img alt="bánh kẹo" src="https://img.freepik.com/free-photo/assortment-pieces-cake_114579-30725.jpg?size=626&ext=jpg&ga=GA1.2.935043941.1664889376&semt=sph" />
        <div className="summary-label-name">Bánh kẹo và các loại thức ăn nhiều đường, chất béo</div>
      </div>

      <div className="summary-info">
        <div className="summary-info-component">
          <div className="recommend-title">Khuyến cáo</div>
          <div className="recommend-bar" style={{width: '20%'}}>
            <div style={{height: '10px', width: '100%', backgroundColor: '#94B49F' }}></div>
          </div>
        </div>
        <div className="summary-info-component">
          <div className="recommend-title">Thực tế</div>
          <div className="actual-bar" style={{width: width}}></div>
          <div>{portion}</div>
        </div>
        <div className="summary-info-message">{message}</div>
     
      </div>
    </div>
  )
};

export default FastSugarComment;