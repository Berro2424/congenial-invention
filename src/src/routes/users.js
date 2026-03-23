
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { full_name, email, role } = req.body;

    if (!full_name || !email) {
      return res.status(400).json({ error: 'full_name and email are required' });
    }

    const [result] = await db.query(
      'INSERT INTO users (full_name, email, role) VALUES (?, ?, ?)',
      [full_name, email, role || 'student']
    );

    res.status(201).json({ user_id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});
