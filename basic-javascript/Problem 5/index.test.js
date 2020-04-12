const encryption = require('./index');

describe('CaesarCypher', () => {
    test('should expect the string \'password\' and a key of 3 to be \'sdvvzrug\' ', () => {
        expect(encryption('password',3)).toBe('sdvvzrug');
    });
    test('should expect an invalid string to be \'Not a valid string\'', () => {
        expect(encryption('',3)).toBe('Not a valid string');
    });
})