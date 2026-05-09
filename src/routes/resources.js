const express = require('express');
const router = express.Router();

const db = require('../db');

const auth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');

// GET all resources
router.get('/', async (req, res, next) => {
  try {
    const [resources] = await db.query('SELECT * FROM resources');
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

// GET resource by id
router.get('/:id', async (req, res, next) => {
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
    next(err);
  }
});

// CREATE resource (ADMIN ONLY)
router.post(
  '/',
  auth,
  requireRole('admin'),
  async (req, res, next) => {
    try {
      const { name, description } = req.body;

      if (!name) {
        return res.status(400).json({
          error: 'name is required'
        });
      }

      if (!description) {
        return res.status(400).json({
          error: 'description is required'
        });
      }

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
      next(err);
    }
  }
);

// DELETE resource
router.delete('/:id', async (req, res, next) => {
  try {
    await db.query(
      'DELETE FROM resources WHERE id = ?',
      [req.params.id]
    );

    res.json({
      message: 'Resource deleted successfully'
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;