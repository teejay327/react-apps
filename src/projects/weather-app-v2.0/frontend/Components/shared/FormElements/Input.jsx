import React, { useReducer, useEffect } from 'react';
import { validate } from '../util/validators.js';

import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true
      }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, { 
    value: props.value || '', 
    isTouched: false,
    isValid: props.valid || false 
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
   // props.onInput(props.id, inputState.value, inputState.isValid)
   onInput(id, value, isValid)
   //}, [inputState.value, inputState.isValid, props.onInput]);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({ 
      type: 'CHANGE', 
      val: event.target.value, 
      validators: props.validators 
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element = props.element === 'input' ? (
    <input 
      id={ props.id }
      type={ props.type } 
      placeholder={ props.placeholder }
      onChange={ changeHandler }
      onBlur={ touchHandler }
      value={ inputState.value }
    /> ) : null;

  return (
    <div className={`form-template ${!inputState.isValid && inputState.isTouched && 'form-invalid' }`}>
      <label htmlFor={ props.id }>{ props.label } </label>
      { element }
      { !inputState.isValid && inputState.isTouched && <p>{ props.errorText }</p> }
    </div>
  )
};

export default Input;