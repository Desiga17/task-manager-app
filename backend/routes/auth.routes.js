const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

router.post('/signup', (req, res) => {
  res.json({ message: 'Signup successful (mock)' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login successful (mock)', token: 'dummy_token' });
});

module.exports = router;