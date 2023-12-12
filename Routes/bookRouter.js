// bookRouter (routes/books.js)
const express = require('express');
const router = express.Router();
const booksController = require('./../Controller/bookController');

router.get('/', async (req, res) => {
  try {
    const books = await booksController.getAllBooks();
    res.json(books);
  } catch (error) {
    console.error('Error retrieving books:', error.message);
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBook = await booksController.addNewBook(req.body);
    res.json(newBook);
  } catch (error) {
    console.error('Error adding a new book:', error.message);
    res.status(500).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const updatedBook = await booksController.updateBookDetails(bookId, req.body);
    res.json(updatedBook);
  } catch (error) {
    console.error(`Error updating book with ID ${bookId}:`, error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
