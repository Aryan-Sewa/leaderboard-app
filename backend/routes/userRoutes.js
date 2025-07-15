const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST add a new user
router.post('/', async (req, res) => {
  const { name } = req.body;
  const user = new User({ name, score: req.body.score || 0 });

  try{
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
