const sut = require('./solution-1.js');

describe ('test for leap year' ,() => {

        test('2019 should return false', done =>{

            let date = new Date('01/01/2019')
            expect(sut(date)).toBe(false);
            done();
        });

        test('2020 should return true', done =>{

            let date = new Date('01/01/2020')
            expect(sut(date)).toBe(true);
            done();
        });

});