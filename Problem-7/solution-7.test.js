const sut = require('./solution-7')

describe('solution-7', () => {
    test('passing 28 to fibonacci() should return 317,811', done => {
        expect.assertions(1);
        const tst = sut.fibonacci(28);
        expect(tst).toBe(317811);
        done();
    });
    test('passing 8 to fibonacci() should return 21', done => {
        expect.assertions(1);
        const tst = sut.fibonacci(8);
        expect(tst).toBe(21);
        done();
    });
})