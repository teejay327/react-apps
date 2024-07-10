import React, { useState, useReducer } from 'react';

import './SearchForm.css';

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
}


const SearchForm = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {value: 'Gold Coast', isValid: true});

  const locationChangeHandlerOTHER = event => {
    dispatch({ type: 'CHANGE', val: event.target.value });
  };

  const [ location, setLocation ] = useState("");

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const locationData = {
      enteredLocation: location
    }

    //props.onSaveLocation(locationData);
    console.log(locationData);
    
    setLocation('');
  }

    return (
      <form onSubmit={ submitHandler }>
        <div className='searchform'>
          <label>Search for a new location</label>
          <input type='text' placeholder='Gold Coast' onChange={ locationChangeHandler } value={ location } />
          <div className='searchform-button'>
            <button type='submit' className='button'>Search</button>
          </div>
        </div>
      </form>

      
    )
};

export default SearchForm;