const {mongoose} = require('mongoose');

async function MONGODB(){

  await mongoose.connect('mongodb://localhost:27017/AiMl')
  try{
    await mongoose.connect('mongodb://localhost:27017/AiMl')
  }
  catch(error){
    console.error('Error connecting to MongoDB:', error);
  }
}