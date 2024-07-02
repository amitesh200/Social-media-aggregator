// User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  twitterId: {
    type: String,
    unique: true,
  },
  twitterAccessToken: {
    type: String,
  },
  twitterAccessTokenSecret: {
    type: String,
  },
  // Add more fields as needed for Facebook, Instagram, etc.
});

// Create User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
