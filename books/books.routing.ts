import express from 'express';
import { apiKeyMiddleware, findBookById, findBookByInfo, ifAPIcorrect } from './books.controller';
const router = express.Router();
router.get('/testapikey', apiKeyMiddleware, ifAPIcorrect);
router.get('/:id', findBookById);
router.get('/search/:info', findBookByInfo);
export default router;
