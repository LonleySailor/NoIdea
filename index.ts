import express from 'express';
import booksRouter from './books/books.routing.js'; 

const app = express();
const PORT = 3000;

app.use(express.json());
/*
app.use('/books', booksRouter);
app.use('/books/:id',booksRouter)
*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (error) => {
    console.error('Server failed to start:', error);
});

