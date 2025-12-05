// controllers/book.controller.js
const bookService = require('../services/book.service');

const getBooks = async (req, res) => {
  const books = await bookService.listBooks();
  res.json(books);
};

const getBook = async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

const addBook = async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(201).json(book);
};

const editBook = async (req, res) => {
  const book = await bookService.updateBook(req.params.id, req.body);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

const removeBook = async (req, res) => {
  const book = await bookService.deleteBook(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Book deleted successfully" });
};

module.exports = { getBooks, getBook, addBook, editBook, removeBook };
