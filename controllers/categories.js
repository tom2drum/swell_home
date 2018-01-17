const mongoose = require('mongoose');

exports.index = async (req, res) => {
	const Category = mongoose.model('category');

	const categories = await Category.find({}).select();

	res.send({categories});
};
