const { notes } = require("../models/data");

const getNotes = (req, res) => {
  res.status(200).send(notes);
};

const createNote = (req, res) => {
  const {title, description, note, createdAt, author } = req.body;
  const newNote = {
    id: notes.length + 1,
    title:title,
    description:description,
    note:note,
    createdAt:createdAt,
    author:author
  };

  notes.push(newNote);
  res.status(200).send(newNote);
};

module.exports = { getNotes, createNote };