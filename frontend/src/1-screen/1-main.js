import React, { useState } from "react";
import Activity from "./1-activity";
import AddMeal from "./1-addMeal";
import './1-main.css';
import Summary from "./1-summary";

const Main = () => {
  const [ AddMealDisplay, setAddMealDisplay ] = useState(true);
  const [ summaryDisplay, setSummaryDisplay ] = useState(false);  
  const [ activityDisplay, setActivityDisplay ] = useState(false); 
  const [ classAddMeal, setAddMeal ] = useState('navigation-item active');
  const [ classSummary, setSummary ] = useState('navigation-item');
  const [ classActivity, setActivity ] = useState('navigation-item');

  const displayAddMeal = (e) => {
    setAddMealDisplay(true);
    setSummaryDisplay(false);
    setActivityDisplay(false);
    setAddMeal('navigation-item active');
    setActivity('navigation-item');
    setSummary('navigation-item');
  };

  const displayActivity = (e) => {
    setAddMealDisplay(false);
    setSummaryDisplay(false);
    setActivityDisplay(true);
    setAddMeal('navigation-item');
    setActivity('navigation-item active');
    setSummary('navigation-item');
  };
  
  const displaySummary = (e) => {
    setAddMealDisplay(false);
    setSummaryDisplay(true);
    setActivityDisplay(false);
    setAddMeal('navigation-item');
    setActivity('navigation-item');
    setSummary('navigation-item active');
  };


  return (
    <div className="outer-box">
      <div className="navigation">
        <button className={classAddMeal}  onClick={displayAddMeal}
        >Buổi ăn</button>
        <button className={classActivity} onClick={displayActivity}
        >Vận động</button>
        <button className={classSummary} onClick={displaySummary}
        >Kết quả</button>
      </div>

      {AddMealDisplay && <AddMeal />}
      {summaryDisplay && <Summary />}
      {activityDisplay && <Activity />}

    </div>
  )
};

export default Main;
