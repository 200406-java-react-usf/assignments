const sut = require('./solution-3')

describe('solution-3', () => {

    test('passing 3 to the parameter into removePos(index) should return Voction', done =>{

        expect.assertions(1)
        tst = sut.removePos(3);
        expect(tst).toBe('Voction');
        done();
    });

})