// bookController (controllers/bookController.js)
const mongoose = require('mongoose');
const Book = require('./../Model/bookModel');

const getAllBooks = async () => {
  return await Book.find();
};

const addNewBook = async (data) => {
  const { title, author, genre, publishedYear, ISBN, description } = data;

  const newBook = new Book({
    title,
    author,
    genre,
    publishedYear,
    ISBN,
    description,
  });

  return await newBook.save();
};

const updateBookDetails = async (bookId, data) => {
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    throw new Error('Invalid book ID');
  }

  const existingBook = await Book.findById(bookId);

  if (!existingBook) {
    throw new Error('Book not found');
  }

  existingBook.set(data);

  const validationError = existingBook.validateSync();
  if (validationError) {
    throw validationError;
  }

  const updatedBook = await existingBook.save();

  if (updatedBook.nModified === 0) {
    throw new Error('No changes made to the book');
  }

  return updatedBook;
};

module.exports = {
  getAllBooks,
  addNewBook,
  updateBookDetails,
};

