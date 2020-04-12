const fibonacci = require('./index');

describe('Fibonnacci', () => {
    test('expect the fibonnacci n value of 5 to be 8 ', () => {
        expect(fibonacci(6)).toBe(8);
    });
    test('expect a fibonnaci value to be a number', () => {
        expect(fibonacci('hi')).toBe('Not a number');
    });
    test('expect a value less than 0 to be equal to -1', () => {
        expect(fibonacci(-4)).toBe(-1);
    });
})