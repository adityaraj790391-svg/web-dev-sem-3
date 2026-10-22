const mongoose = require('mongoose');

const user = new mongoose.Schema({

  name: String,
  email: String,
  password: String,
  age: Number

});

const userSchema = mongoose.model('User', user);

module.exports = userSchema;