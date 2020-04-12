const sut = require('./solution-8')

describe('solution-8', ()=> {
    test('passing [1,2,3] and [3,2,1] to addArray() should return [4,4,4]', done => {
        expect.assertions(1);
        const tst = sut.addArray([1,2,3],[3,2,1]);
        expect(tst).toEqual([4,4,4]);
        done();
    })

    test('passing [1,2,3,4,5] and [1,2,3] to addArray() should return [2,4,6,4,5]', done => {
        expect.assertions(1);
        const tst = sut.addArray([1,2,3,4,5],[1,2,3]);
        expect(tst).toEqual([2,4,6,4,5]);
        done();
    })
    
})