// services/book.service.js
const Book = require('../models/book.model');

// Get all books
const listBooks = async () => {
  return await Book.find().sort({ createdAt: -1 }).lean();
};

// Get single book
const getBookById = async (id) => {
  return await Book.findById(id).lean();
};

// Create book
const createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

// Update book
const updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
};

// Delete book
const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

module.exports = { listBooks, getBookById, createBook, updateBook, deleteBook };
