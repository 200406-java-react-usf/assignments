const sut = require('./solution-10');

describe('solution-10', () => {

    test('should return A if phrase starts with a vowel', () => {
        expect(sut.sortByLetter('alpha')).toBe('A');
    });

    test('should return B if phrase starts with bcdfg', () => {
        expect(sut.sortByLetter('bravo')).toBe('B');
    });

    test('should return C if phrase starts with hjklm', () => {
        expect(sut.sortByLetter('hotel')).toBe('C');
    });

    test('should return D if phrase starts with nqprstvxyz', () => {
        expect(sut.sortByLetter('no')).toBe('D');
    });

    test('should return E if phrase starts with w or capital letter', () =>{
        expect(sut.sortByLetter('Test')).toBe('E');
    });
});