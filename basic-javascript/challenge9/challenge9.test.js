const sut = require('./challenge9')

describe('challenge_9', () => {
    test('It should return the index of the longest string', () => {
        expect(LongString(["test", 
        "testing", "this is a test", "test done"])).toBe(2);
    });
    test('should throw an error if argument is not an array', () => {
        expect(() => {
            LongString('55');
        }).toThrow();
    });
    test('should throw an error if array is empty', () => {
        expect(() => {
            LongString([]);
        }).toThrow();
    });
})
