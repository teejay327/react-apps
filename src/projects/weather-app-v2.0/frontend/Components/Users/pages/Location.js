import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/FormElements/Input.jsx';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators.js';
import Button from '../../shared/FormElements/Button.js';
// perhaps not necessary
import { useForm } from '../../shared/hooks/form-hook.js';

import './Location.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'LOCATION_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const Location = () => {
  const [ formState, dispatch ] = useReducer(formReducer, {
    inputs: { 
      location: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const locationChangeHandler = useCallback((id, value, isValid) => {
    dispatch({ 
      type: 'LOCATION_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id })
  }, []);

  return (
    <form className="location-form">
      <Input 
        id="location"
        element="input" 
        type="text" 
        label="title" 
        validators={[ VALIDATOR_REQUIRE() ]} 
        errortext="Please enter a valid location"
        onInput={ locationChangeHandler }
        />
      <Button
        type="submit" 
        disabled={ !formState.isValid } >
          Set location
      </Button>
    </form>
  )
}

export default Location;