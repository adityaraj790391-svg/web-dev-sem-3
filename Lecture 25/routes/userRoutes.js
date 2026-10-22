const express = require('express');
const router = express.Router();

router.post('/signup', require('../controllers/userController').signup);

module.exports = router;