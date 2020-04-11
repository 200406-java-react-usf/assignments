const sut = require('./solution-7.js');

describe('count vowels', () => {
    test('test 3', done => {
        expect(sut(3)).toBe(2);
        done();
    });
    test('test -4', done => {
        expect(sut(-4)).toBe(-3);
        done();
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