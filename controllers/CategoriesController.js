const Category = require('mongoose').model('category');

exports.index = async (req, res) => {
	const categories = await Category.find({}).select();

	res.send(categories);
};
