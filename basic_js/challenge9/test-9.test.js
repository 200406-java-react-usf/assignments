const sut = require('./solution-9');

describe('solution-9', () => {
    test("passing array of strings should return 6 as the string with the largest index", done =>{
        expect.assertions(1)
        const index = sut.indexOfLargestStr(['please','dont','break'])
        expect(index).toBe(6)
        done()
    })
    test("passing array of strings should return 9 as the string with the largest index", done =>{
        expect.assertions(1);
        const index = sut.indexOfLargestStr(['please','dont','break','my code'])
        expect(index).toBe(7)
        done()
    })
})