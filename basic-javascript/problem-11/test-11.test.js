const sut = require('./solution-11');

describe('soultion-11', () => {

    test('should return true if the two arrays have the same size and contents', () => {

        
        expect(sut.equivArr([1,2,3],[1,2,3])).toBeTruthy();
        
    });

    test('should return false if the two arrays do not have the same size or conetnts', () => {

        expect(sut.equivArr([1,2,3],[1,2])).toBeFalsy();

    });

    test('should throw an error if you did not send two arrays', () => {
        expect ( () => {
            sut.equivArr(4);
        }).toThrow();
    });


});