import express from 'express';
import {books } from './books.controller.js';
import { constants } from 'buffer';
const router = express.Router();
/*
router.get('/books', (req, res) => {
        res.json(books);
});
*/
/*
router.get('/books/:id', (req, res) => {
    const { id } = req.params;

    // Find the book by ID
    const book = books.find(book => book.id === parseInt(id));//kod chatgpt

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});
*/
router.get('/books/:id', (req, res) => {
    const { id } = req.params;   
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(id)) { 
            return res.status(200).json(books[i]); //mój kod
        }
    }
    res.status(404).json({ error: 'Book not found' });
});



export default router;
