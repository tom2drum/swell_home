const { Category } = require('../models/Category');

const categories = require('../seeds/categories');

const populateCategories = done => {
  Category.remove({})
    .then(() => Category.insertMany(categories))
    .then(() => done());
};

module.exports = { populateCategories };
