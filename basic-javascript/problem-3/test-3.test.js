const sut = require('./solution-3');

describe('solution-3', () => {

    test('should return a string after removing a single character', () => {

        expect(sut.removeChar('donkey',4)).toEqual('donky');
        
    });

    test('should give an error when a non-string value is passed', () => {
        expect ( () => {
            sut.removeChar(4,4);
        }).toThrow();
    });

    test('should give an error when the position is > length of string', () => {
        expect ( () => {
            sut.removeChar('bird',40);
        }).toThrow('That position is longer than your phrase!');
    });

    test('should give an error if empty string is passed', () => {
        expect ( () => {
            sut.removeChar('');
        }).toThrow('Not a valid string');
    });
});