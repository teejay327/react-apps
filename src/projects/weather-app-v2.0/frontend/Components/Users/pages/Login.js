import React, { useState, useContext } from 'react';

import Card from '../../UI/Elements/Card.js';
import Input from '../../shared/FormElements/Input.jsx';
import Button from '../../shared/FormElements/Button.js';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js';
import { useForm } from '../../shared/hooks/form-hook.js';
import { LoginContext } from '../../shared/context/login-context.js';
import './Login.css';

const Login = () => {
  const login = useContext(LoginContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
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
    if (!isLoginMode) {
      setFormData({
          ...formState.inputs,
          name: undefined
        }, 
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false);
    };
    setIsLoginMode(prevMode => !prevMode);
  };

  const loginSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    login.login();
  };

  return (
    <div className='login-container'>
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
        <Button className='button-inverse' onClick={ switchModeHandler }>Switch to { isLoginMode ? 'Signup' : 'Login' }</Button>
      </Card>
    </div>
  )
};

export default Login;