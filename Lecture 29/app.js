const express = require('express');
const  morgan = require('morgan');
const db = require('./config/db');
require('dotenv').config();

db();

const app = express();
const notesRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api', notesRoutes);
app.use('/user', userRoutes);

// app.use('/user', require('./routes/userRoutes.js'));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use(express.urlencoded({extended: true}));
// app.post('/api/createnotes', createNote);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});