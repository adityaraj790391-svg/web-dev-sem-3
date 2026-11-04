const userSchema = require('../models/user');

const signup = async (req, res) => {

  let {name, email, password, age} = req.body;
  if(!name || !email || !password || !age){
    return res.status(403).send('Please fill all the fields');
  }

  let user = await userSchema.create({name, email, password, age});
  res.status(201).send('User created successfully');

};


const Login = async(req, res) => {
  let {email, password} = req.body;

  if(!email || !password){

    return res.status(401).send('Invalid Credentials')
  }

  let user = await userSchema.findOne({email});

  if(password !== user.password){
    return res.status(401).send('Unauthorized');

  res.status(200).json({

  'message' : 'Login successfully',
  data : user
      
  })
  }
}

module.exports = { signup, Login};