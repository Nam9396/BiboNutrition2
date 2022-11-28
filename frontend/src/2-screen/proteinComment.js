import React from "react";
import { useSelector } from "react-redux";
import { proteinData } from "../store/foodInDaySlice";


const ProteinComment = () => {
  const proteinInfo = useSelector(proteinData);
  const { width, message, portion } = proteinInfo;

  return (
    <div className="summary-box">
      <div className="summary-label">
        <img alt="protein" src="https://img.freepik.com/premium-photo/healthy-food-high-protein_82893-8540.jpg?size=626&ext=jpg&ga=GA1.2.935043941.1664889376&semt=sph" />
        <div className="summary-label-name">
          Các loại thịt, cá, trứng, các loại đậu
        </div>
      </div>

      <div className="summary-info">
        <div className="summary-info-component">
          <div className="recommend-title">Khuyến cáo</div>
          <div className="recommend-bar" style={{width: '40%'}}>
          <div style={{height: '10px', width: '49%', backgroundColor: '#94B49F' }}></div>
          <div style={{height: '10px', width: '49%', backgroundColor: '#94B49F' }}></div>
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

export default ProteinComment;