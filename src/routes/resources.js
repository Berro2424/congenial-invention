const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM resources');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { resource_name, resource_type, location } = req.body;

    if (!resource_name || !resource_type) {
      return res.status(400).json({ error: 'resource_name and resource_type are required' });
    }

    const [result] = await db.query(
      'INSERT INTO resources (resource_name, resource_type, location) VALUES (?, ?, ?)',
      [resource_name, resource_type, location || null]
    );

    res.status(201).json({ resource_id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create resource' });
  }
});
