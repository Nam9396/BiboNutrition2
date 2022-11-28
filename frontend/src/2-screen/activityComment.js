import React from "react";
import { useSelector } from "react-redux";
import { activityInHour } from "../store/activitySlice";

const ActivityComment = () => {
  const { width, message, hour } = useSelector(activityInHour);

  return (
    <div className="summary-part">

        <div className="summary-part-header">Mức độ vận động</div>
     

        <div className="summary-box" style={{border: 'none'}}>
          <div className="summary-label">
            <img alt="Vận động" src="https://img.freepik.com/free-photo/funny-starts-kids-fashion-concept-group-teen-boys-girls-running-park_155003-24991.jpg?size=626&ext=jpg&ga=GA1.2.935043941.1664889376&semt=sph" />
            <div className="summary-label-name">Vận động thể lực</div>
          </div>

          <div className="summary-info">
            <div className="summary-info-component">
              <div className="recommend-title">Khuyến cáo</div>
              <p>Trẻ từ 2 - 5 tuổi khi có thể, cần vận động ít nhất 3 giờ mỗi ngày</p>
              <div className="recommend-bar" style={{width: '100%'}}>
                <div style={{height: '10px', width: '100%', backgroundColor: '#94B49F' }}></div>
              </div>
            </div>
            <div className="summary-info-component">
              <div className="recommend-title">Thực tế</div>
              <div className="actual-bar" style={{width: width}}></div>
              <div>{hour} giờ</div>
            </div>
            <div className="summary-info-message">{message}</div>
            
          </div>
        </div>

    </div>
  )
};

export default ActivityComment;