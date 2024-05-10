import { Book, LoginInfo} from "./books.types";

export const books: Book[] = [
    { id: 1, title: 'Lord Of The Rings', author: 'Tolkien', genre: 'Fantasy' },
    { id: 2, title: 'Tomek Saywer', author: 'Mark Twain', genre: 'Przygodowy' },
    { id: 3, title: 'Pan Tadeusz', author: 'Adam Mickiewicz', genre: 'Wiersze' },
    { id: 4, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' }
];
export const UserInformation: Map<string, LoginInfo> = new Map([
    ['123456789', { user: 'PanspodBiedronki', apiKey: '123456789' }],
    ['KochamJacka', { user: 'Blondyna', apiKey: 'KochamJacka' }],
    ['Admin123', { user: 'Administrator', apiKey: 'Admin123' }]
]);
