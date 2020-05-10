const sut = require('./Problem8'); //system under test = sut

describe('Problem8', () => {
    
    test('adds the values of arrays', done => {
        expect.assertions(9);
        let arr1 = [1,2,3,5,3];
        let arr12 = [1,2,2];
        let arr2 = [3,2,1];
        let arr22 = [2,2,1,5,3];
        let arr3 = [3,2,1];
        let arr32 = [1,2,3];
        let arr4 = [0,0];
        let arr42 = [0,0,0];
        let arr5 = [-1,-2,-3,-5,-3];
        let arr52 = [-1,-2,-2];
        let earr1 = [2,4,5,5,3];
        let earr2 = [5,4,2,5,3];
        let earr3 = [4,4,4];
        let earr4 = [0,0,0];
        let earr5 = [-2,-4,-5,-5,-3];
        expect(sut.addArrays(arr1,arr12)).toEqual(earr1);
        expect(sut.addArrays(arr2,arr22)).toEqual(earr2);
        expect(sut.addArrays(arr3,arr32)).toEqual(earr3);
        expect(sut.addArrays(arr4,arr42)).toEqual(earr4);
        expect(sut.addArrays(arr5,arr52)).toEqual(earr5);


        let wrongType1 = "I am a bad user and I am inputting a string!";
        let correctType1 = [0,1,2];
        let correctType2 = [0,1,2];
        let wrongType2 = "I am a bad user and I am inputting a string!";
        let wrongType3 = "I am a bad user and I am inputting a string!";
        let Wrongtype32 = "I am a bad user and I am inputting a string!";
        let correctType4 = [1,2,3,5,3];
        let wrongType4 = [1,2,"sneaking in bad data"];
        expect((wrongType1, correctType1) => {
            sut.addArrays(wrongType1);
        }).toThrow();
        expect((correctType2, wrongType2) => {
            sut.addArrays(wrongType2);
        }).toThrow();
        expect((wrongType3, wrongType32) => {
            sut.addArrays(wrongType3, wrongType32);
        }).toThrow();
        expect((wrongType4, correctType4) => {
            sut.addArrays(wrongType4, correctType4);
        }).toThrow();
        done();
    });

});