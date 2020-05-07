const sut = require('./solution-3.js');

describe('pop char in location', () => {
    test('abcde', () => {
        expect(sut('abcde', 0)).toBe("bcde");    });
    test('arry ["abc", "def"]', done => {
        sut(["abc", "def"], 0, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad string request');
            done();
        });
        done();
    });
    test("position error", done => {
        sut("abc", 0.5, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad position request');
            done();
        });
        done();
    });
});