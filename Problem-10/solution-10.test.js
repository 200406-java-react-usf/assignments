const sut = require('./solution-10');

describe('solution-10', ()=>{
    test("passing 'the cat' to criteriaCase() should return D", done => {
        expect.assertions(1);
        const tst = sut.criteriaCase("the cat");
        expect(tst).toEqual('D');
        done();
    });
    test("passing 'a cat' to criteriaCase() should return A", done => {
        expect.assertions(1);
        const tst = sut.criteriaCase("a cat");
        expect(tst).toEqual('A');
        done();
    });
})