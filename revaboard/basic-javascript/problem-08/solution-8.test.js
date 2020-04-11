const sut = require('./solution-8.js');

describe('cesar encrypt', () => {
    test("[1,2,3,4,5][1,1,1]", done => {
        expect(sut([1,2,3,4,5], [1,1,1])).toEqual([2,3,4,4,5]);
        done();
    });
    test('string', done => {
        sut("12345", "111", err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad array request');
            done();
        });
        done();
    });
});