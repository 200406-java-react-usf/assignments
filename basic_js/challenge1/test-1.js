const sut = require('./solution-1');

describe('date', () => {
    test ('should return boolean when getFullYear is called', done => {

        sut.getFullYear (date => {
            expect(date).toBeTruthy();
            done();
        });
    });

    test('2020 should return true', done =>{

        let date = new Date('01/01/2020')
            expect(sut(date)).toBe(true);
            done();
    });

    test('2019 should return false', done =>{

        let date = new Date('01/01/2019')
            expect(sut(date)).toBe(false);
            done();
    });

});