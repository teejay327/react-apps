import express from 'express';
import User from '../models/user-model.js';
import{ v4 as uuidv4 } from 'uuid';
import HttpError from '../models/http-error.js';
import { validationResult } from 'express-validator';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Tony Jones',
    email: 'test@test.com',
    password: 'tester',
    isAdmin: 'true'
  },
  {
    id: 'u2',
    name: 'Dasa Jones',
    email: 'test2@test.com',
    password: 'tester2',
    isAdmin: 'true'
  }
]

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS })
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid input during signup', 422)
    );
  };

  const { name, email, password, isAdmin } = req.body;

  // const hasUser = DUMMY_USERS.find(user => user.email === email);
  // if (hasUser) {
  //   throw new HttpError('User not created. Email already exists', 422);
  // }
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError('Sign up failed, please try again.', 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError('User already exists.', 422);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    isAdmin 
  });

  // const createdUser = {
  //   id: uuidv4(),
  //   name,
  //   email,
  //   password
  // };

  // DUMMY_USERS.push(createdUser);

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Sign up failed - please try again.', 500);
    return next(error);
  }

  // getters: true removes underscore of id
  res.status(201).json({ user: createdUser.toObject({ getters: true }) })
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  // const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
  // if (!identifiedUser || identifiedUser.password !== password) {
  //   throw new HttpError('Incorrect username or password', 401);
  // }
  // res.json({ message: 'Logged in!'});

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Log in unsuccessful - check your username and password.', 500);
    return next(error)
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError('Login unsuccessful - invalid credentials.', 401);
  }

  res.json({ message: 'Logged in!' });
};

export default { getUsers, signup, login };