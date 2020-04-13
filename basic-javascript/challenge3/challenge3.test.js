const sut = require('./challenge3');

describe('challenge_3', () => {
    test('should remove a character at the indicated index', () => {
        sut.removeChar('find the EExtra Char', 10, () => {
            expect('a character was removed form the string: \n' + sut.str);
        });
    });
    test('should ensure string is not empty', () => {
        sut.removeChar('', 3, () => {
            expect('please provide a non-empty string');
        });
    });
    test('should ensure index is a valid number', () => {
        sut.removeChar('my strings are too long', 'kk', () => {
            expect('Invalid index please try againg');
        });
    });
});
