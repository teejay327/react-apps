import express from 'express';
import usersController from '../controllers/users-controller.js';
import { check } from 'express-validator';
import HttpError from '../models/http-error.js';

const router = express.Router();

// router.get('/users', (req, res, next) => {
//   console.log('GET request in users');
//   res.json({message: 'Users request made'})
// });

router.get('/', usersController.getUsers);

router.post('/signup', 
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password')
      .isLength({ min: 6 })  
  ],
  usersController.signup
);

router.post('/login', usersController.login);

export default router;