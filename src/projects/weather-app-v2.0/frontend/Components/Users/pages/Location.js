import React from 'react';
import Input from '../../shared/FormElements/Input.jsx';

// perhaps not necessary
import { useForm } from '../../shared/hooks/form-hook.js';

import './Location.css';




// needs form for location

const Location = () => {
  return (
    <form className='location-form'>
      <Input type="text" label="title" />
      <div>Location</div>
    </form>

  )
}

export default Location;