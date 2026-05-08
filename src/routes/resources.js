
const express = require('express');
const router = express.Router();

const db = require('../db');

const auth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');

// GET all resources
router.get('/', async (req, res) => {
  try {
    const [resources] = await db.query(
      'SELECT * FROM resources'
    );

    res.json(resources);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch resources'
    });
  }
});

// GET resource by id
router.get('/:id', async (req, res) => {
  try {
    const [resource] = await db.query(
      'SELECT * FROM resources WHERE id = ?',
      [req.params.id]
    );

    if (resource.length === 0) {
      return res.status(404).json({
        error: 'Resource not found'
      });
    }

    res.json(resource[0]);
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch resource'
    });
  }
});

// CREATE resource (ADMIN ONLY)
router.post(
  '/',
  auth,
  requireRole('admin'),
  async (req, res) => {
    try {
      const { name, description } = req.body;

      const [result] = await db.query(
        `
        INSERT INTO resources (name, description)
        VALUES (?, ?)
        `,
        [name, description]
      );

      res.status(201).json({
        message: 'Resource created successfully',
        resourceId: result.insertId
      });
    } catch (err) {
      res.status(500).json({
        error: 'Failed to create resource'
      });
    }
  }
);

// DELETE resource
router.delete('/:id', async (req, res) => {
  try {
    await db.query(
      'DELETE FROM resources WHERE id = ?',
      [req.params.id]
    );

    res.json({
      message: 'Resource deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      error: 'Failed to delete resource'
    });
  }
});

module.exports = router;