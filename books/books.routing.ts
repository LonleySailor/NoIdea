import express from 'express';
import {findBookById, findBookByInfo } from './books.controller';
import { constants } from 'buffer';
const router = express.Router();
/*
router.get('/books', (req, res) => {
        res.json(books);
});
*/

router.get('/:id', findBookById);
router.get('/search/:info',findBookByInfo);


export default router;
