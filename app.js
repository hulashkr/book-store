const express = require('express');
require('dotenv').config();
const bookRouter = require('./Routes/bookRouter');
const connectDB = require('./Config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

if (!process.env.MONGODB_URI) {
  console.error('Please set the MONGO_URI environment variable.');
  process.exit(1);
}

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.use('/api/books', bookRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', reason.stack || reason);
  process.exit(1);
});
