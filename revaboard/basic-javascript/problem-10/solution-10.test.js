const sut = require('./solution-10.js');

describe('return index of longest str', () => {
    test("aeiou", () => {
        expect(sut("apple")).toEqual("A");
        
    });
    test("bcdfg", () => {
        expect(sut("banana")).toEqual("B");
        
    });
    test("hjklm", () => {
        expect(sut("lemon")).toEqual("C");
        
    });
    test('npqrstvxvz', () => {
        expect(sut("nectarine")).toEqual("D");
        
    });
    test('else', () => {
        expect(sut("12345")).toEqual("E");
        
    });
    test('bad string', done => {
        sut(["abc"], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad string request');
            done();
        });
        
    });
});