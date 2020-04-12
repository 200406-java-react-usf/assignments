const sut = require('./Problem8'); //system under test = sut

describe('Problem8', () => {
    
    test('adds the values of arrays', done => {
        expect.assertions(4);
        let arr1 = [1,2,3,5,3];
        let arr12 = [1,2,2];
        let arr2 = [3,2,1];
        let arr22 = [2,2,1,5,3];
        let arr3 = [3,2,1];
        let arr32 = [1,2,3];
        let arr4 = [0,0];
        let arr42 = [0,0,0];
        let earr1 = [2,4,5,5,3];
        let earr2 = [5,4,2,5,3];
        let earr3 = [4,4,4];
        let earr4 = [0,0,0];
        expect(sut.addArrays(arr1,arr12)).toEqual(earr1);
        expect(sut.addArrays(arr1,arr12)).toEqual(earr1);
        expect(sut.addArrays(arr1,arr12)).toEqual(earr1);
        expect(sut.addArrays(arr1,arr12)).toEqual(earr1);
        done();
    });

});