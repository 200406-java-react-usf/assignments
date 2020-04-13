const sut = require('./challenge10')

describe('challenge_10', () => {
    test('Should return A if the string starts with a, e, i, o, u', () => {
        expect(GradeString('alfaromeo')).toBe('A');
    });
    test('Should return A if the string starts with b, c, d, f, g', () => {
        expect(GradeString('camaro')).toBe('B');
    });
    test('Should return A if the string starts with h, j, k, l, m', () => {
        expect(GradeString('highlander')).toBe('C');
    });
    test('Should return A if the string starts with n, p, q, r, s, t, v, x, y, z', () => {
        expect(GradeString('range rover')).toBe('D');
    });
    test('Should return E if the string is not any of the above', () => {
        expect(GradeString('Orange')).toBe('E');
    });
    test('Should throw an error if it\'s not a string', () => {
        expect(() => {
            GradeString(9);
        }).toThrow();
    })
    test('Should throw an error if it\'s not a string', () => {
        expect(() => {
            GradeString('');
        }).toThrow();
    })
})
