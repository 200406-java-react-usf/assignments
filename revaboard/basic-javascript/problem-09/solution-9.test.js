const sut = require('./solution-9.js');

describe('return the first letter into 5 diff cases', () => {
    test('["1","12","1234"]', done => {
        expect(sut(["1","12","1234"])).toEqual(2);
        done();
    });
    test('bad arr', done => {
        sut("12345", err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad array request');
            done();
        });
        done();
    });
    test('bad string', done => {
        sut(["1",1,"1234"], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad string request');
            done();
        });
        done();
    });
});