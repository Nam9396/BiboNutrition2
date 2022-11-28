import React from "react";
import { useSelector } from "react-redux";
import { milkData } from "../store/foodInDaySlice";


const MilkComment = () => {
  const milkInfo = useSelector(milkData);
  const { width, message, portion } = milkInfo;

  return (
    <div className="summary-box">
      <div className="summary-label">
        <img alt="sữa" src="https://img.freepik.com/premium-psd/milk-packaging-box-mockup_439185-113.jpg?size=626&ext=jpg&ga=GA1.2.935043941.1664889376&semt=sph" />
        <div className="summary-label-name">Sữa, phô mai, yogurt</div>
      </div>

      <div className="summary-info">
        <div className="summary-info-component">
          <div className="recommend-title">Khuyến cáo</div>
          <div className="recommend-bar" style={{width: '60%'}}>
            <div style={{height: '10px', width: '32%', backgroundColor: '#94B49F' }}></div>
            <div style={{height: '10px', width: '32%', backgroundColor: '#94B49F' }}></div>
            <div style={{height: '10px', width: '32%', backgroundColor: '#94B49F' }}></div>
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

export default MilkComment;