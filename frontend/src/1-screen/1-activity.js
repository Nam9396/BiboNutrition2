import React from "react";
import ActivitySlider from "./1-actitity-slider";
import './1-activity.css';

const Activity = () => {
  return (
    <div className="activity">
      <div className="activity-header">Thêm thời gian vận động (phút)</div>
      
      <ActivitySlider  name={'Chạy, nhảy, leo trèo'} />
      <ActivitySlider  name={'Chơi đồ chơi'} />
      <ActivitySlider  name={'Các hoạt động ngoài trời'} />
      <ActivitySlider  name={'Đạp xe, chạy xe scooter'} />
      <ActivitySlider  name={'Bơi'} />
      

    </div>
  )
};

export default Activity;
