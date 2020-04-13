const sut = require('./solution-11.js');

describe('compare 2 arr', () => {
    test("[1,2,3,4,5],[1,2,3,4,5]", () => {
        expect(sut([1,2,3,4,5],[1,2,3,4,5])).toBe(true);
    });
    test("[1,2,3,4,5],[1,2,3,4,4]", () => {
        expect(sut([1,2,3,4,5],[1,2,3,4,4])).toBe(false);
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