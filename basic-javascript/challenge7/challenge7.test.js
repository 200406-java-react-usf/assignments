const sut = require('./challenge7');

describe('Challenge_7', () => {

    test('Should return a number when provided a valid input', () => {
      expect(myFib(8)).toBe(21)
    });
    test('Should always return -1 when provided a negative number', () => {
      expect(myFib(-3)).toBe(-1)
    });
    test('Should throw an error when provided with invalid input', () => {
      expect(() => {
        myFib('ss');
      }).toThrow();
    });
});
