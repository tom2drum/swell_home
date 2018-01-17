const express = require('express');
const getApiRouter = require('./api');

module.exports = () => {
  const router = express.Router();
  router.use('/api', getApiRouter());
  return router;
};
