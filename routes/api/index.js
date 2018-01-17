const express = require('express');

const categoriesController = require('../../controllers/categories');

module.exports = () => {
  const router = express.Router();

	router.get('/categories', categoriesController.index);

  return router;
};
