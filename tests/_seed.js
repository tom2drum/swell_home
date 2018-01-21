const mongoose = require('mongoose');

// const { Category } = require('../models/category');

const categories = require('../seeds/categories');

const populateCategories = done => {
	const Category = mongoose.model('category');

	Category.remove({})
		.then(() => Category.insertMany(categories))
		.then(() => done());
};

module.exports = { populateCategories };
