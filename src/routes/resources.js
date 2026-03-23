




const express = require('express');
const router = express.Router();
const db = require('../db');
const validate = require('../middleware/validateRequest');

router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM resources');
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validate(['resource_name', 'resource_type']),
  async (req, res, next) => {
    try {
      const { resource_name, resource_type, location } = req.body;

      if (!location) {
        return res.status(400).json({
          error: 'Resources cannot be created without a location'
        });
      }

      const [result] = await db.query(
        'INSERT INTO resources (resource_name, resource_type, location) VALUES (?, ?, ?)',
        [resource_name, resource_type, location]
      );

      res.status(201).json({ resource_id: result.insertId });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
