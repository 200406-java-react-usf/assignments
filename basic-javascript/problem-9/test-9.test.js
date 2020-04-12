const sut = require('./solution-9');

describe('solution-9', () => {

    test('should return the index of the longest string in array', () => {
        const list = ['a','apple','test','tester','longest'];
        expect(sut.longestString(list)).toBe(4);
    });

    test('should throw an error if parameter type is not array', () => {

        expect ( () => {
            sut.longestString(3);
        }).toThrow('You did not send me an array');

    });

    test('should throw an error if any index of array does not contain a number', () => {
        const list = ['a',3,'test']
        expect ( () => {
            sut.longestString(list);
        }).toThrow('The list does not contain the correct info');
    });

});