import React from 'react';

import './Card.css';

// Take out unless needed - import into UserItem.js

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
