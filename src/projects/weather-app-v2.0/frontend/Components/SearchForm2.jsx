import React, { useState } from 'react';



/*
      <form onSubmit={ submitHandler }>
        <div className='searchform'>
          <label>Search for a new location</label>
          <input type='text' placeholder='Gold Coast' onChange={ locationChangeHandler } value={ location } />
          <div className='searchform-button'>
            <button type='submit' className='button'>Search</button>
          </div>
        </div>
      </form>
      */

const SearchForm2 = ({ setLocation2 }) => {
  //const locationData = "Carrara, QLD, Australia";
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => { 
    event.preventDefault();
    console.log(`Form submitted with input: ${inputValue}`);
  };

  return (
    <form onSubmit={ submitHandler }>
      <div>
        <label>Search for a new location</label>
        <input type='text' value={ inputValue } onChange={ inputChangeHandler }/>
        <button type='submit' >Submit</button>
      </div>
    </form>
  )
}

export default SearchForm2;
