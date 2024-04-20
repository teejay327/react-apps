import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  isAdmin: { type: Boolean, required: true, default: false }
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

export default User;