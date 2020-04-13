const sut = require('./solution-8')

describe('solution-8', () => {
    test('should add the values of arrays, even if the arrays are different sizes, into one array', () => {
        const expected = [2,4,6];
        expect(sut.addArray([1,2,3],[1,2,3])).toEqual(expect.arrayContaining(expected))
    })
    test('should throw an error if an array is not sent', () => {
        expect ( () => {
            sut.addArray(2,3);
        }).toThrow('You did not send valid data, please input numbers.')
    })
    test('should throw an error if value in array contains a non-number', () => {
        expect ( () => {
            sut.addArray([1,2,3],['a'])
        }).toThrow('These are supposed to be numbers')
    })
})