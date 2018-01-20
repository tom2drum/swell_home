const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = () => {
	const categorySchema = new Schema({
		name: {
			type: String,
			required: true,
			minlength: 1
		},
		image: {
			type: String,
			required: true,
			minlength: 1
		}
	});

	return categorySchema;
};
