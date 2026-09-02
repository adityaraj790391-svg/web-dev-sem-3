const express = require('express');
const router = express.Router();
const { getNotes } = require('../controllers/notesController');

router.get('/notes', getNotes);
router.post('/createnotes', createNote);

module.exports = router;