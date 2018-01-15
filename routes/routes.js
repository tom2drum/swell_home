const categoryController = require('../controllers/CategoriesController');

module.exports = app => {
  app.get('/api/test', (req, res) => {
    res.status(200).send('okkkk');
  });

  app.get('/api/categories', categoryController.index)
};
