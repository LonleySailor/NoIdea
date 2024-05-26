import { NextFunction, Request, Response } from 'express';
import { books } from './books.assets';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import router from './books.routing';

export const findBookByIdSearch = (id: number) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books[i];
        }
    }
    return null;
};
export const findBookById = (req: Request, res: Response) => {
    const { id } = req.params;
    const book = findBookByIdSearch(parseInt(id));
    if (book) {
        return res.status(200).json(book);
    } else {
        return res.status(404).json({ error: 'Book not found' });
    }
};


export const findBookByInfo = (req: Request, res: Response) => {
    const givenInfo = req.params.info.toLowerCase();
    if (!givenInfo) {
        return res.status(400).json({ error: "Missing search parameter" });
    }
    for (let i = 0; i < books.length; i++) {
        const title = books[i].title.toLowerCase();
        const genre = books[i].genre.toLowerCase();
        const author = books[i].author.toLowerCase();

        if (title.includes(givenInfo) || author.includes(givenInfo) || genre.includes(givenInfo)) {
            return res.status(200).json(books[i]);
        }
    }
    return res.status(404).json({ error: "Not Found" });
};
export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const expectedApiKey = '123456789';
    if (req.body.apiKey === expectedApiKey) {
        next();
    } else {
        res.status(403).send('incorrect');
    }
};
export const ifAPIcorrect = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Success' });
};

