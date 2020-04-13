const sut = require('./solution-4.js');

describe('remove test in string', () => {
    test('I will remove test', () => {
        expect(sut('I will remove test')).toBe('I will remove ');
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