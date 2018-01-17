const mongoose = require('mongoose');

module.exports = () => {
  const categorySchema = new mongoose.Schema({
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
