import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false });

  const changeHandler = event => {
    dispatch({ type: 'CHANGE', val: event.target.value });
  }

  const element = 
    <input 
      type={ props.type } 
      placeholder={ props.placeholder }
      onChange={ changeHandler }
      value={ inputState.value }
    />

  return (
    <div className={`form-template ${!inputState.isValid && 'form-invalid' }`}>
      <label>{ props.label } </label>
      { element }
      { !inputState.isValid && <p>Invalid </p> }
    </div>
  )
};

export default Input;