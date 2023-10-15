import React from 'react';
import { Link,useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

function SideBarButton(props) {
  const location=useLocation();
  const isActive=location.pathname === props.to;
  const btn_class=isActive?"btn-details active":"btn-details";
  return (
    <Link to={props.to}>
      <div className={btn_class}>
        <IconContext.Provider value={{size:'24px' ,className:"btn-icon"}}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}

export default SideBarButton;