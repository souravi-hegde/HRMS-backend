const express = require('express');
const router = express.Router();
const UserEmployee = require('../models/UserEmployee');

// Example route to create a new user-employee record
router.post('/signup', async (req, res) => {
  try {
    const newUserEmployee = new UserEmployee(req.body);
    await newUserEmployee.save();
    res.status(201).json(newUserEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
