import React, { useState } from 'react';

const SearchForm2 = ({ setLocation2 }) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => { 
    event.preventDefault();
    console.log(`Form submitted with input: ${inputValue}`);
    setLocation2(inputValue);
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
