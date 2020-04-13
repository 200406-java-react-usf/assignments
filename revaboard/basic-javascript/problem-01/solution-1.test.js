const sut = require('./solution-1.js');

describe('leap year test', () => {
    test('2003 should return false', () => {
        let date = new Date("01/01/2003");
        expect(sut(date)).toBe(false);
    });
    test('2004 shoulde return true', () => {
        let date = new Date("01/01/2004");
        expect(sut(date)).toBe(true);
    });
    test('1900 shoulde return false', () => {
        let date = new Date("01/01/1900");
        expect(sut(date)).toBe(false);

    });
    test('2000 shoulde return true', () => {
        let date = new Date("01/01/2000");
        expect(sut(date)).toBe(true);
    });
    test('bad date', done => {
        let date = new Date("abcde");
        sut(date, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad date request');
            done();
        });
        done();
    });
});

