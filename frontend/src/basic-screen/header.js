import React, { useState } from "react";
import Menu from "../1-screen/menu";
import './header.css';

const Header = () => {
  const [ displayMenu, setDisplayMenu ] = useState(false);

  return (
    <div className="header">
      <div className="menu-img"><img alt="logo" src="https://bibohealth.com/wp-content/uploads/2022/01/Artboard-1-2-1024x200.png"/></div>
      <div className="menu" onClick={() => setDisplayMenu(true)}>Menu</div>

      {displayMenu && <Menu setDisplayMenu={setDisplayMenu}/>}
    </div> 
  )
};

export default Header;
