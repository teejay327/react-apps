import express from 'express';
import User from '../models/user-model.js';
// import{ v4 as uuidv4 } from 'uuid';
import HttpError from '../models/http-error.js';
import { validationResult } from 'express-validator';

const getUsers = async (req, res, next) => {
 
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError('Fetching users failed - please retry', 500);
    return next(error);
  };
  res.json({ users: users.map(user => user.toObject({ getters: true }))});
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid input during signup', 422)
    );
  };

  const { name, email, password, isAdmin } = req.body;

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

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Log in unsuccessful - check your username and password.', 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError('Login unsuccessful - invalid credentials.', 401);
    return next(error);
  }

  res.json({ message: 'Logged in!' });
};

export default { getUsers, signup, login };