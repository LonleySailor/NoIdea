import { Request, Response } from 'express';
import { books } from './books.assets';

export const findBookById = (req: Request, res: Response) => {
    const { id } = req.params;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(id)) {
            return res.status(200).json(books[i]);
        }
    }
    res.status(404).json({ error: 'Book not found' })
};

export const findBookByInfo = (req: Request, res: Response) => {
   // const { info } = req.params.info;
    // const givenInfo = givenInfoInParams.toLowerCase();
     const givenInfo = req.params.info.toLowerCase();
   if (!givenInfo) {
       return res.status(400).json({ error: "Missing search parameter" });
    }
    for (let i = 0; i < books.length; i++) {
        let title = books[i].title.toLowerCase();
        let genre = books[i].genre.toLowerCase();
        let author = books[i].author.toLowerCase();

        if (title.includes(givenInfo) || author.includes(givenInfo) || genre.includes(givenInfo)) {
            return res.status(200).json(books[i]);
        }
    }

    return res.status(404).json({ error: "Not Found" });
};
