import React, { useReducer } from 'react';

import './Input.css';

const Input = props => {
  useReducer();
  console.log(props);
  const changeHandler = event => {

}

  return <div className={'form-template'}>
    <label>{ props.label } </label>
    <input type={ props.type } placeholder={ props.placeholder } />
  </div>
};

export default Input;