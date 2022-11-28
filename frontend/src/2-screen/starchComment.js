import React from "react";
import { useSelector } from "react-redux";
import { starchData } from "../store/foodInDaySlice";


const StarchComment = () => {
  const starchInfo = useSelector(starchData);
  const { width, message, portion } = starchInfo;

  return (
    <div className="summary-box">
      <div className="summary-label">
        <img alt="tinh bột" src="https://img.freepik.com/free-photo/bagels-with-slices-bread-bowl-flour_114579-5871.jpg?size=626&ext=jpg&ga=GA1.2.935043941.1664889376&semt=sph" />
        <div className="summary-label-name">
          Bột, cháo, bánh mỳ, khoai tây và các thực phẩm giàu tinh bột khác
        </div>
      </div>

      <div className="summary-info"> 
        <div className="summary-info-component">
          <div className="recommend-title">Khuyến cáo</div>
          <div className="recommend-bar">
            <div style={{height: '10px', width: '19%', backgroundColor: '#94B49F' }}></div>
            <div style={{height: '10px', width: '19%', backgroundColor: '#94B49F' }}></div>
            <div style={{height: '10px', width: '19%', backgroundColor: '#94B49F' }}></div>
            <div style={{height: '10px', width: '19%', backgroundColor: '#94B49F' }}></div>
            <div style={{height: '10px', width: '19%', backgroundColor: '#94B49F' }}></div>
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

export default StarchComment;
    