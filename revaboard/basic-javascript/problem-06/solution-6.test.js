const sut = require('./solution-6.js');

describe('count vowels', () => {
    test('aaa bbb ccc eee', done => {
        expect(sut('aaa bbb ccc eee', 1)).toBe(6);
        done();
    });
    test('arry ["abc", "def"]', done => {
        sut(["abc", "def"], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad string request');
            done();
        });
        done();
    });
});