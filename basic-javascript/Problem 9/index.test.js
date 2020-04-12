const longString = require('./index');

describe('longString', () => {
    test('expect the array of strings ["cat","michelle","kendall","katie","ki"] to equal index of 1', () => {
        expect(longString(["cat","michelle","kendall","katie","ki"])).toBe(1);
    });
    test('expect parameter "hello" to not bea valid array.', () => {
        expect(longString('hello')).toBe('Not an array');
    });
})