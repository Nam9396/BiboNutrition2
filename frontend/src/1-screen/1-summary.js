import React from "react";
import StarchComment from '../2-screen/starchComment';
import FruitVegeComment from '../2-screen/fruitVegeComment';
import MilkComment from '../2-screen/milkComment';
import ProteinComment from '../2-screen/proteinComment';
import FastSugarComment from "../2-screen/fatSugarComment";
import ActivityComment from "../2-screen/activityComment";
import './1-summary.css';



const Summary = () => {
  
  // starch, fruitVege, milk, protein, fatSugar
  
  return (
    <div className="outer-box">
      <div className="summary">
        <div className="summary-part">
          <div className="summary-part-header">Chế độ dinh dưỡng hàng ngày</div>
          <StarchComment />
          <FruitVegeComment />
          <MilkComment />
          <ProteinComment />
          <FastSugarComment />     
        </div>
      </div>
      <div className="summary">
        <ActivityComment />
      </div>
    </div>
  )
};

export default Summary;
