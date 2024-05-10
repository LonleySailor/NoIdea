import express from 'express';
import {findBookById, findBookByInfo, userAuthenication } from './books.controller';
const router = express.Router();
router.get('/:id', findBookById);
router.get('/search/:info',findBookByInfo);
router.post('/signin',userAuthenication);
export default router;
