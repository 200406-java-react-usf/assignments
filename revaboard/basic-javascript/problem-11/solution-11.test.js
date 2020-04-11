const sut = require('./solution-11.js');

describe('cesar encrypt', () => {
    test("[1,2,3,4,5],[1,2,3,4,5]", done => {
        expect(sut([1,2,3,4,5],[1,2,3,4,5])).toBe(true);
        done();
    });
    test("[1,2,3,4,5],[1,2,3,4,4]", done => {
        expect(sut([1,2,3,4,5],[1,2,3,4,4])).toBe(false);
        done();
    });
    test('string', done => {
        sut("12345", [1,2,3,4,5], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad array request');
            done();
        });
        done();
    });
});