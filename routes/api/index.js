const express = require('express');

const categoryController = require('../../controllers/CategoriesController');

module.exports = () => {
  const router = express.Router();

	router.get('/categories', categoryController.index);

  return router;
};
