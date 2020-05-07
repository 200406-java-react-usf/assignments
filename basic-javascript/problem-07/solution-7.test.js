const sut = require('./solution-7.js');

describe('count vowels', () => {
    test('test 3', () => {
        expect(sut(3)).toBe(2);
    });
    test('test -4', () => {
        expect(sut(-4)).toBe(-1);
    });
    test('test not a number', done => {
        sut("3", err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad num request');
            done();
        });
        done();
    });
});