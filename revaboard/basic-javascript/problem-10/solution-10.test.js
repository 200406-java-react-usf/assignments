const sut = require('./solution-10.js');

describe('return index of longest str', () => {
    test("aeiou", done => {
        expect(sut("apple")).toEqual("A");
        done();
    });
    test("bcdfg", done => {
        expect(sut("banana")).toEqual("B");
        done();
    });
    test("hjklm", done => {
        expect(sut("lemon")).toEqual("C");
        done();
    });
    test('npqrstvxvz', done => {
        expect(sut("nectarine")).toEqual("D");
        done();
    });
    test('else', done => {
        expect(sut("12345")).toEqual("E");
        done();
    });
    test('bad string', done => {
        sut(["abc"], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad string request');
            done();
        });
        done();
    });
});