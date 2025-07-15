const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const topUsers = await User.find().sort({ score: -1 }).limit(10);
    res.json(topUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

