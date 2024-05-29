import React from 'react';
import Card from '../../UI/Elements/Card.js';
import Input from '../../shared/FormElements/Input.jsx';
import Button from '../../shared/FormElements/Button.js';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators.js';
import './Login.css';

const loginSubmitHandler = event => {
  event.preventDefault();
  //console.log(formState.inputs);
};

const Login = () => {
  return (
    <Card className='login-header'>
      <h2>Login required</h2>
      <hr />
      <form onSubmit={ loginSubmitHandler }>
        <Input 
          element='input' 
          id='email' 
          type='email'
          label='email' // Notice email is E-MAIL in model
          validators={[ VALIDATOR_EMAIL() ]} 
          errorText="Invalid email address"
          //onInput={ inputHandler }
        />
        <Input 
          element='input' 
          id='password' 
          type='password' 
          label='email' 
          validators={[ VALIDATOR_MINLENGTH(5) ]} 
          errorText="Password must contain at least 5 characters"
          //onInput={ inputHandler }
        />
        <Button type='submit' disabled={ !formState.isValid }>Login</Button>
      </form>
    </Card>
  )
};

export default Login;