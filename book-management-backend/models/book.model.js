// models/book.model.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  price: Number,
  coverUrl: String,
  pages: Number,
  categories: [String],
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
