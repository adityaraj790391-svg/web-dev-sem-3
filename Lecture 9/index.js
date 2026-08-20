const express = require('express');
const app = express();
app.use(express.json())


// app.get('/', (req, res) => {
//   res.status(200).send('Heavenly Demon')
// })

//  CRUD OPERATIONS

// READ 
let students = ["Vikir", "Cheon Ma", "Lee Geon"]

app.get('/student', (req,res) => {
  res.status(200).send(students);
})

// CREATE

app.post('/student', (req,res) => {
  let data = req.body.name
  students.push(data);
  res.status(200).send(" The Demon God ");
})

// PUT - update

app.put('/student/:id', (req,res) => {
  console.log("server is running on http://localhost:3000");
  let id = req.params.id
  let data = req.body.name

  students[id] = data;
  res.status(200).send("Ascended");
})


app.listen(3000, () => {
  console.log("server is running on http://localhost:3000")
});