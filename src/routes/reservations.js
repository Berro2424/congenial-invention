const express = require('express');
const router = express.Router();

const db = require('../db');
const { getAll, getById } = require('../utils/dbHelpers');

const auth = require('../middleware/authMiddleware');

// GET all reservations
router.get('/', async (req, res, next) => {
  try {
    const reservations = await getAll('reservations');
    res.json(reservations);
  } catch (err) {
    next(err);
  }
});

// GET reservation by id
router.get('/:id', async (req, res, next) => {
  try {
    const reservation = await getById('reservations', req.params.id);

    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    res.json(reservation);
  } catch (err) {
    next(err);
  }
});

// CREATE reservation PROTECTED
router.post('/', auth, async (req, res, next) => {
  try {
    const {
      user_id,
      resource_id,
      start_time,
      end_time
    } = req.body;

    if (!user_id) {
      return res.status(400).json({
        error: 'user_id is required'
      });
    }

    if (!resource_id) {
      return res.status(400).json({
        error: 'resource_id is required'
      });
    }

    if (!start_time) {
      return res.status(400).json({
        error: 'start_time is required'
      });
    }

    if (!end_time) {
      return res.status(400).json({
        error: 'end_time is required'
      });
    }

    const [result] = await db.query(
      `
      INSERT INTO reservations
      (user_id, resource_id, start_time, end_time)
      VALUES (?, ?, ?, ?)
      `,
      [user_id, resource_id, start_time, end_time]
    );

    res.status(201).json({
      message: 'Reservation created successfully',
      reservationId: result.insertId
    });
  } catch (err) {
    next(err);
  }
});

// DELETE reservation
router.delete('/:id', async (req, res, next) => {
  try {
    const reservation = await getById('reservations', req.params.id);

    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    await db.query(
      'DELETE FROM reservations WHERE id = ?',
      [req.params.id]
    );

    res.json({
      message: 'Reservation deleted successfully'
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;