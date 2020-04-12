const sut = require('./solution-5')

describe('solution-5', ()=>{
    test('apply ceasaerShift encytion to the string abc with 3 shift should return def ', done => {
        expect.assertions(1);
        const tst = sut.caesarShift(3, 'abc');
        expect(tst).toEqual('def');
        done();
    })
    test('apply ceasaerShift encytion to the string force with 3 shift should return irufh ', done => {
        expect.assertions(1);
        const tst = sut.caesarShift(3, 'force');
        expect(tst).toEqual('irufh');
        done();
    })
})