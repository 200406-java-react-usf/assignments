const wordCheck = require('./index');

describe('wordCheck', () => {
    test('should expect "Family test subject" to be "Family  subject"', () => {
        expect(wordCheck("Family test subject")).toBe("Family  subject");
    });
    test('should expect a number to not be a valid string', () => {
        expect(wordCheck(5)).toBe('Not a valid string');
    });
})