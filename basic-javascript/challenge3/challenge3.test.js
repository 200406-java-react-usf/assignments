const sut = require('./challenge3');

describe('challenge_3', () => {
    test('should remove a character at the indicated index', () => {
        expect(sut.removeChar('my  name is test', 3)).toBe('my name is test');
    });
    test('should ensure string is not empty', () => {
        expect(() => {
            sut.removeChar('', 55);
        }).toThrow();
    });
    test('should throw error when provided an invalid index', () => {
        expect(() => {
            sut.removeChar('asdklnfkdlsj', 'kk');
        }).toThrow()
    })
        test('should throw error when provided a negative index', () => {
            expect(() => {
                sut.removeChar('asdklnfkdlsj', -1);
            }).toThrow()
    });
    test('should throw error when provided an index bigger than the string', () => {
        expect(() => {
            sut.removeChar('asdklnfkdlsj', 51);
        }).toThrow()
});
});
