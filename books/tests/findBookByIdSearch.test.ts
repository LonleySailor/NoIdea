import { books } from '../books.assets';
import { findBookByIdSearch } from '../books.controller';
const testnumber = 2;
describe('findBookByIdSearch function', () => {
    test('should return correct book object when book is found', () => {
        expect(findBookByIdSearch(testnumber)).toEqual(books[testnumber - 1]);
    });

    test('should return null when book is not found', () => {
        expect(findBookByIdSearch(8)).toBeNull();
    });
}); 