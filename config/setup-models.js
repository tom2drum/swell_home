const mongoose = require('mongoose');
const getCategorySchema = require('../models/category');

module.exports = () => {
	const CategorySchema = getCategorySchema();
	mongoose.model('category', CategorySchema);
};
