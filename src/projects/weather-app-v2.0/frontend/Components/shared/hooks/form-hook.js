import React, {useReducer, useCallback } from 'react';

const formReducer = (state,action) => {
  switch (useActionData.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === useActionData.inputId) {
          formIsValid = formIsValid && useActionData.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      }
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id
    });
  }, []);

  return [formState, inputHandler];
};