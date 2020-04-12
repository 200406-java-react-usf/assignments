const vowelCounter = require('./index');

describe('vowelCounter', () => {
    test('should expect the string Sleeping to have 3 vowels', () => {
        expect(vowelCounter('Sleeping')).toBe(3);
    });
    test('should expect the number to not be a valid string', () => {
        expect(vowelCounter(5)).toBe('Not a string');
    });
})