import React from 'react';

import './Input.css';

const Input = props => {
  return <div className={'form-template'}>
    <label>{ props.label } </label>
    <input type={ props.type } placeholder={ props.placeholder } />
  </div>
};

export default Input;