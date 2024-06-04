import React, { useState } from 'react';

import Card from '../../UI/Elements/Card.js';
import Input from '../../shared/FormElements/Input.jsx';
import Button from '../../shared/FormElements/Button.js';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js';
import { useForm } from '../../shared/hooks/form-hook.js';
import './Login.css';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    setIsLoginMode(prevMode => !prevMode);
  };

  const loginSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className='login-header'>
      <h2>Login required</h2>
      <hr />  
      <form onSubmit={ loginSubmitHandler }>
        {!isLoginMode && (
          <Input 
            element='input'
            id='name' 
            type='text' 
            label='Your name' 
            validators={[ VALIDATOR_REQUIRE() ]}
            errorText="Please enter a name"
            onInput={ inputHandler }
          />
        )}
      <div className='login-form-inputs'>
        <Input 
          element='input' 
          id='email' 
          type='email'
          label='email'
          validators={[ VALIDATOR_EMAIL() ]} 
          errorText="Invalid email address"
          onInput={ inputHandler }
        />
        <Input 
          element='input' 
          id='password' 
          type='password' 
          label='password' 
          validators={[ VALIDATOR_MINLENGTH(5) ]} 
          errorText="Password must contain at least 5 characters"
          onInput={ inputHandler }
        />
        </div>
        <Button type='submit' disabled={ !formState.isValid }>
          {isLoginMode ? 'Login' : 'Signup' }</Button>
      </form>
      <Button inverse onClick={ switchModeHandler }>Switch to { isLoginMode ? 'Signup' : 'Login' }</Button>
    </Card>
  )
};

export default Login;