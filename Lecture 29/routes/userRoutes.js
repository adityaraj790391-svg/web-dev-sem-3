const express = require('express');
const router = express.Router();

router.post('/signup', require('../controllers/userController').signup);
router.get('/Login', require('../controllers/userController'))

module.exports = router;