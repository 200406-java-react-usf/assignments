const sut = require('./Problem11'); //system under test = sut

describe('Problem11', () => {
    
    test('Check if two arrays have the same size and contents ', done => {
        expect.assertions(7);
        let arr1 = [4,2,8,4,7];
        let arr12 = [7,4,4,2,8];
        let arr2 = [4,2,8,4,7];
        let arr22 = [7,5,4,2,8];
        let arr3 = [4,2,8,4];
        let arr32 = [7,5,4,2,8];
        let arr4 = [];
        let arr42 = [1,2,3];
        let arr5 = ["one", "two", "three"];
        let arr52 = ["one", "two", "three"];
        expect(sut.equivArr(arr1, arr12)).toBe(true);
        expect(sut.equivArr(arr2, arr22)).toBe(false);
        expect(sut.equivArr(arr3, arr32)).toBe(false);
        expect(sut.equivArr(arr4, arr42)).toBe(false);
        expect(sut.equivArr(arr5, arr52)).toBe(true);

        //Type testing
        let wrongType1 = "I'm the wrong type!"
        let correctType1 = [1,2,3]
        expect((wrongType1, correctType1) => {
            sut.equivArr(wrongType1, correctType1);
        }).toThrow();
        expect((correctType1, wrongType1) => {
            sut.equivArr(correctType1, wrongType1);
        }).toThrow();
        done();
    });

});