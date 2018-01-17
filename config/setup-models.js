const mongoose = require('mongoose');
const getCategorySchema = require('../models/category');

const setupModels = () => {
  const CategorySchema = getCategorySchema();
  mongoose.model('category', CategorySchema);
};

module.exports = setupModels;
