import express from 'express';
import booksRouter from '../books/books.routing';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});