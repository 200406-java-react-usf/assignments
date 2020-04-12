const charCat = require('./index');

describe('charCat', () => {
    test('expect the first character of the word "Patetic" to be in case D ', () => {
        expect(charCat('Patetic')).toBe('D');
    });
    test('expect parameter other than a string to not bea valid string', () => {
        expect(charCat(3)).toBe('Not a string');
    });
})