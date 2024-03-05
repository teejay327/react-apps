import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const [ location, setLocation ] = useState(props.location);
  const locationChangeHandler = (event) => {
    setLocation(e.target.value);
  }

    return (
      <form>
        <div className='searchform'>
          <label>Search for a location</label>
          <input type='text' placeholder='Gold Coast' onChange={ locationChangeHandler } value={ location } />
          <div className='searchform-button'>
            <button type='submit' className='button'>Search</button>
          </div>
        </div>
      </form>

      
    )
};

export default SearchForm;