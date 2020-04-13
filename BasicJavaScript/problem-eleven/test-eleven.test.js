const sut = require('./solution-eleven');


describe('testing multiple arrays to see if they have the same values, regardless of order', () =>{

    test('testing first given example, should return true', () => {

        expect(sut.equivArray([4,2,8,4,7],[7,4,4,2,8])).toBe(true);

    });

    test('testing second given example, should return false', () => {

        expect(sut.equivArray([4,2,8,4,7],[7,5,4,2,8])).toBe(false);

    });

    test('testing third given example, should return false', () => {

        expect(sut.equivArray([4,2,8,4],[7,5,4,2,8])).toBe(false);

    });

    test('testing my own example, should return true', () => {

        expect(sut.equivArray([1,2,3,4,5,6],[6,3,4,2,5,1])).toBe(true);

    });

    test('testing my own example, should return false', () => {

        expect(sut.equivArray([1,2,3,4,5,6],[7,8,9,10,1,12])).toBe(false);

    });

    test('testing the thrown error', () => {

        expect(() => {sut.equivArray(5, [7,5,4,2,8])}).toThrow();

    });

    test('testing the thrown error', () => {

        expect(() => {sut.equivArray([4,2,8,4,7], 5)}).toThrow();

    });


});