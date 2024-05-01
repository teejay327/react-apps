import React from "react";

// import './UserItem.css  ?????

const UserItem = props => {
  return (
    <li className="user-item" >
      <div className="user-item-content">
        <div className="user-item-info">
          <h2>{ props.name }</h2>
          <h3>{ props.location }</h3>
        </div>
      </div>
    </li>
  )
};

export default UserItem;