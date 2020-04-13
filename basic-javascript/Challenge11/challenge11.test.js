const sut = require ('./challenge11');

describe('challenge11', () => 
{
    test('the test should return truth', () => 
    {
        expect(sut.equivArr([4,2,8,4,7], [4,2,8,4,7])).toBeTruthy();
    });

    test('the test should return truth', () => 
    {
        expect(sut.equivArr([4,2,8,4,7], [7,4,4,2,8])).toBeTruthy();
    });

    test('the test should return false', () => 
    {
        expect(sut.equivArr([4,2,8,4,7], [7,5,4,2,8])).toBeFalsy();
    });

    test('the test should return false', () => 
    {
        expect(sut.equivArr([4,2,8,4], [7,5,4,2,8])).toBeFalsy();
    });
});