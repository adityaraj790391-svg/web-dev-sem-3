const userSchema = require('../models/user');

const signup = async (req, res) => {

  let {name, email, password, age} = req.body;
  if(!name || !email || !password || !age){
    return res.status(403).send('Please fill all the fields');
  }

  let user = await userSchema.create({name, email, password, age});
  res.status(201).send('User created successfully');

};

module.exports = { signup };