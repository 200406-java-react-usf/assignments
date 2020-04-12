const sut = require('./Problem11'); //system under test = sut

describe('Problem11', () => {
    
    test('should return true or false depending on whether or not a date given is on a leap year', done => {
        expect.assertions(4);
        let arr1 = [4,2,8,4,7];
        let arr12 = [7,4,4,2,8];
        let arr2 = [4,2,8,4,7];
        let arr22 = [7,5,4,2,8];
        let arr3 = [4,2,8,4];
        let arr32 = [7,5,4,2,8];
        let arr4 = [];
        let arr42 = [1,2,3];
        expect(sut.equivArr(arr1, arr12)).toBe(true);
        expect(sut.equivArr(arr2, arr22)).toBe(false);
        expect(sut.equivArr(arr3, arr32)).toBe(false);
        expect(sut.equivArr(arr4, arr42)).toBe(false);
        done();
    });

});