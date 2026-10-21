const express = require('express');
const  morgan = require('morgan');

const app = express();
const notesRoutes = require('./routes/noteRoutes');

app.use('/api', notesRoutes);
app.use(express.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use(express.urlencoded({extended: true}));
// app.post('/api/createnotes', createNote);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});