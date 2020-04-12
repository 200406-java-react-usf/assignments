const sut = require('./solution-9');

describe('solution-9', () => {
    test("passing array of strings (['abc','cdesf','abcdef']) should return 6 as the string with the largest index ", done =>{
        expect.assertions(1);
        const tst = sut.indexOfLargestStr(['abc','cdesf','abcdef']);
        expect(tst).toBe(6);
        done();
    });
    test("passing array of strings (['ab','cdesf','abcdfdef','123456789']) should return 9 as the string with the largest index ", done =>{
        expect.assertions(1);
        const tst = sut.indexOfLargestStr(['ab','cdesf','abcdfdef','123456789']);
        expect(tst).toBe(9);
        done();
    });
})