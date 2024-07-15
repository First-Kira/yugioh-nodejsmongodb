const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  count: Number
});

module.exports = mongoose.model('Card', cardSchema);
