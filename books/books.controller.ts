import { Request, Response } from 'express';

export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
}

export const books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 3' }
];

