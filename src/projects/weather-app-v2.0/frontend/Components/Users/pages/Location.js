import React from 'react';
import Input from '../../shared/FormElements/Input.jsx';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators.js';
import Button from '../../shared/FormElements/Button.js';
// perhaps not necessary
import { useForm } from '../../shared/hooks/form-hook.js';

import './Location.css';



const Location = () => {
  const [formState, locationChangeHandler] = useForm({
    location: {
      value: '',
      isValid: false
    }
  }, false);

  const locationSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <form className="location-form" onSubmit={ locationSubmitHandler }>
      <Input 
        id="location"
        element="input" 
        type="text" 
        label="location" 
        validators={[ VALIDATOR_REQUIRE() ]} 
        errortext="Please enter a valid location"
        onInput={ locationChangeHandler }
        />
      <Button
        type="submit" 
        className="location-form-button"
        disabled={ !formState.isValid } >
          Set location
      </Button>
    </form>
  )
}

export default Location;