const express = require('express');
const router = express.Router();
const { register, login, deleteUser } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.delete('/delete', deleteUser);

module.exports = router;
