import express from 'express';
import{ v4 as uuidv4 } from 'uuid';
import HttpError from '../models/http-error.js';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Tony Jones',
    email: 'test@test.com',
    password: 'tester'
  },
  {
    id: 'u2',
    name: 'Dasa Jones',
    email: 'test2@test.com',
    password: 'tester2'
  }
]

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS })
};

const signup = (req, res, next) => {
  const { name, email, password} = req.body;

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser })
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('Incorrect username or password', 401);
  }
  res.json({ message: 'Logged in!'});

};

export default { getUsers, signup, login };