const express = require('express');
const app = express();
const PORT =  3000;
app.use(express.json());
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 3' }
];


app.get('/api/books', (req, res) => {
    res.json(books);
    
});
app.post('/api/books', (req, res) => {
    const { title, author, genre } = req.body;
    const newBook = { id: books.length + 1, title, author, genre };
    books.push(newBook);
    res.status(201).json(newBook); 
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
