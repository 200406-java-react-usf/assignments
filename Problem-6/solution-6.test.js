const sut = require('./solution-6');

describe('solution-6', ()=> {
    test("passing 'healaeo' to countVowel() should return 5", done => {
        expect.assertions(1)
        const tst = sut.countVowel('beautiful');
        expect(tst).toBe(5);
        done();
    })
    test("passing 'beatiful' to countVowel() should return 5", done => {
        expect.assertions(1)
        const tst = sut.countVowel('beautiful');
        expect(tst).toBe(5);
        done();
    })
})