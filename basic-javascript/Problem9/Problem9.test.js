const sut = require('./Problem9'); //system under test = sut

describe('Problem9', () => {
    
    test('returns the longest sting in an array\'s index', done => {
        expect.assertions(5);
        let arr1 = ["this", "is", "a", "tester"];
        let arr2 = ["abcd", "abcd", "ab"];
        let arr3 = [];
        expect(sut.checkLongestString(arr1)).toBe(4);
        expect(sut.checkLongestString(arr2)).toBe(1);
        expect(sut.checkLongestString(arr3)).toBe(0);

        //Testing types
        let wrongType1 = "I'm a string!";
        let wrongType2 = ["abcd", 123, "ab"];
        expect((wrongType1) => {
            sut.checkLongestString(wrongType1);
        }).toThrow();
        expect((wrongType2) => {
            sut.checkLongestString(wrongType2);
        }).toThrow();
        done();
    });

});