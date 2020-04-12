const sut = require('./solution-1');

describe('solution-1', () => {

    test('2020 in the parameter should return true', done => {

            expect.assertions(2);
            let tst = sut.isGregorian(2020);
            expect(tst).toBeTruthy();
            expect(tst).toBe(true);
            done();
        });


        test('2021 in the parameter should return false', done => {

            expect.assertions(1);
            let tst = sut.isGregorian(2021);
            expect(tst).toBe(false);
            done();
        });
    });


