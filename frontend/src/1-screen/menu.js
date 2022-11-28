import React from "react";
import './menu.css';

const Menu = ({setDisplayMenu}) => {
  
  return (
    <div className="menu-tab">
      <div className="menu-header">
        {/* <img/>
        <div>Welcome!</div> */}
        <button className="exit-button"
          onClick={() => setDisplayMenu(false)}
        ><span className="material-symbols-outlined">arrow_back</span></button>
      </div>
      

      <div className="menu-label">
        <span className="material-symbols-outlined">sentiment_very_satisfied</span>
        <div className="menu-item">Giới thiệu</div>
      </div>

      <div className="menu-label">
        <span className="material-symbols-outlined">description</span>
        <div className="menu-item">Hướng dẫn</div>
      </div>
 
      <div className="menu-label">
        <span className="material-symbols-outlined">app_registration</span>
        <div className="menu-item">Đăng ký / Đăng nhập</div>
      </div>

      <div className="menu-label">
        <span className="material-symbols-outlined">undo</span>
        <div className="menu-item">Đăng xuất</div>
      </div>

      <div className="menu-label">
        <span className="material-symbols-outlined">format_quote</span>
        <div className="menu-item">Cơ sở</div>
      </div>
      
    </div>
  )
};

export default Menu;