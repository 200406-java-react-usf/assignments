const sut = require('./challenge11') 

describe('challenge_8', () => {
    test('Should return false if both arrays have different values', () => {
        expect(equivArray([4, 5, 6], [3, 2, 1])).toBe(false);
    })
    test('Should return true if both arrays have same values', () => {
        expect(equivArray([4,2,8,4,7],[7,4,4,2,8])).toBe(true);
    })
    test('should throw an error if arr1 is not an array', () => {
        expect(() => {
            equivArray(5, [5, 4, 3]);
        }).toThrow();
    })
    test('should throw an error if arr2 is not an array', () => {
        expect(() => {
            equivArray([3, 2], 4);
        }).toThrow();
    });
});