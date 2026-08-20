const express = require('express');
const { registerUser, login, logout, getOtherUsers } = require('../controller/user.controller');
const isAuthenticated = require('../Middlewares/auth.middleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/logout', logout);
router.get('/otherusers', isAuthenticated, getOtherUsers);

module.exports = router;