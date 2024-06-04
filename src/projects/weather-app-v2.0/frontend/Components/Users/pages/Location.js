import React from 'react';
import Input from '../../shared/FormElements/Input.jsx';

import './Location.css';

// needs form

const Location = () => {
  return (
    <form className='location-form'>
      <Input type="text" label="title" />
      <div>Location</div>
    </form>

  )
}

export default Location;