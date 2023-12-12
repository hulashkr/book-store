# book-store

## How to run this backend application
1. run the npm install command
2. run the npm run dev script

   
## Endpoints descriptions
1. GET /books: Retrieve all books  
Endpoint: /books 
HTTP Method: GET 
Description: This endpoint allows user to retrieve a list of all books stored in the database. 
Controller Function: getAllBooks  
Usage: Make a GET request to /books to get a list of all books. 



2. POST /books: Add a new book 
Endpoint: /books 
HTTP Method: POST 
Description: Used to add a new book to the database. User needs to provide the book details (title, author, genre, published year, ISBN, and description) in the request body. 
Controller Function: addNewBook 
Request Body:  
{  
  "title": "Book Title", 
  "author": "Author Name", 
  "genre": "Genre", 
  "publishedYear": 2023, 
  "ISBN": "ISBN Number", 
  "description": "Book Description" 
} 
Usage: Make a POST request to /books with the book details in the request body to add a new book. 



3. PUT /books/{bookId}: Update book details 
Endpoint: /books/{bookId} 
HTTP Method: PUT 
Description: Allows user to update the details of a specific book identified by its bookId. User need to provide the bookId in the URL path and the updated book details in the request body. 
Controller Function: updateBookDetails 
Request Body: 
{ 
  "title": "Updated Title", 
  "author": "Updated Author", 
  "genre": "Updated Genre", 
  "publishedYear": 2024,  
  "ISBN": "Updated ISBN", 
  "description": "Updated Description" 
} 
Usage: Make a PUT request to /books/{bookId} with the updated book details in the request body to modify the information of a specific book. 
