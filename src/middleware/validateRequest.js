
module.exports = (requiredFields) => {
  return (req, res, next) => {
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: `Missing required field: ${field}`
        });
      }
    }
    next();
  };
};

middleware/errorHandler.js

module.exports = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: 'An unexpected server error occurred'
  });
};
