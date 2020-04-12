const sut = require('./solution-8');

describe('solution-8', () => {

    test('should return a single array that combines values from two arrays', () => {

        const expected = [2,4,6];
        expect(sut.addArr([1,2,3],[1,2,3])).toEqual(expect.arrayContaining(expected));

    });

    test('should throw an error if an array is not sent', () => {
        expect ( () => {
            sut.addArr(2,3);
        }).toThrow('You did not send me valid data.');
    });

    test('should throw an error if value in array contains a non-number', () => {
        expect ( () => {
            sut.addArr([1,2,3],['a']);
        }).toThrow('These are supposed to be numbers');
    });
    
});