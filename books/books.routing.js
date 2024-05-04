"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_js_1 = require("./books.controller.js");
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.get('/books', (req, res) => {
    res.json(books_controller_js_1.books);
});
router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    // Find the book by ID
    const book = books_controller_js_1.books.find(book => book.id === parseInt(id));
    if (book) {
        res.status(200).json(book);
    }
    else {
        res.status(404).json({ error: 'Book not found' });
    }
});
/*
router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(id)) {
            return res.status(200).json(books[i]);
        }
    }
    res.status(404).json({ error: 'Book not found' });
});
*/
exports.default = router;
