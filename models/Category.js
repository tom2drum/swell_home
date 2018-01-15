const mongoose = require('mongoose');

const { Schema } = mongoose;

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

mongoose.model('category', categorySchema);

