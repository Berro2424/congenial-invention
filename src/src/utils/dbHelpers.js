const db = require('../db');

const getAll = async (tableName) => {
  const [rows] = await db.query(`SELECT * FROM ${tableName}`);
  return rows;
};

const getById = async (tableName, id) => {
  const [rows] = await db.query(
    `SELECT * FROM ${tableName} WHERE id = ?`,
    [id]
  );

  return rows[0] || null;
};

module.exports = {
  getAll,
  getById
};