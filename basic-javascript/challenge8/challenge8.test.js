const sut = require('./challenge8') 

describe('challenge_8', () => {
    test('Should return the addition of 2 arrays', () => {
        expect(sut.AddArray([4, 5, 6], [3, 2, 1, 7])).toStrictEqual([7, 7, 7, 7]);
    })
    test('should throw an error if arr1 is not an array', () => {
        expect(() => {
            AddArray(5, [5, 4, 3]);
        }).toThrow();
    })
    test('should throw an error if arr2 is not an array', () => {
        expect(() => {
            AddArray([3, 2], 4);
        }).toThrow();
    });
});
