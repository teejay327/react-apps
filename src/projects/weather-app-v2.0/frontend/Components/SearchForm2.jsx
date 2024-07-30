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
 // const locationData = "Carrara, QLD, Australia";
  const locationData = useState('');

  return (
    <form>
      <div>
        <label>Search for a new location</label>
        <input type='text' value={ locationData } />
        <button type='button' onClick={() => setLocation2(locationData)} >Click SearchForm2</button>
      </div>
    </form>
  )
}

export default SearchForm2;
