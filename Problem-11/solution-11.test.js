const sut = require('./solution-11')

describe('solution-11', ()=>{
    test("equivArr([4,2,8,4,7],[7,4,4,2,8]) should return true", done => {
        expect.assertions(1);
        let tst = sut.equivArr([4,2,8,4,7],[7,4,4,2,8]);
        expect(tst).toBe(true);
        done();
    })
    test("equivArr([4,2,8,4,7],[7,5,4,2,8]) should return false", done => {
        expect.assertions(1);
        let tst = sut.equivArr([4,2,8,4,7],[7,5,4,2,8]);
        expect(tst).toBe(false);
        done();
    })
    test("equivArr([4,2,8,4],[7,5,4,2,8]) should return false", done => {
        expect.assertions(1);
        let tst = sut.equivArr([4,2,8,4],[7,5,4,2,8]);
        expect(tst).toBe(false);
        done();
        
    })
})
