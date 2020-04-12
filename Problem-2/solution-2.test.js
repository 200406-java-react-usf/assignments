const sut = require('./solution-2');

describe('solution-2', ()=>{

    test('adding john@hotmail.com should return true', done => {
        expect.assertions(1)
        let tst = sut('john@hotmail.com');
        expect(tst).toBe(true);
        done();
    })
    test('adding johnhotmail.com should return false', done => {
        expect.assertions(1)
        let tst = sut('johnhotmail.com');
        expect(tst).toBe(false);
        done();
    })


})