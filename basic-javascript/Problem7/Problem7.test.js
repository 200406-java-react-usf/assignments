const sut = require('./Problem7'); //system under test = sut

describe('Problem7', () => {
    
    test('returns the corresponding value of the Fibonacci sequence.', done => {
        expect.assertions(7);
        let index1 = 0;
        let index2 = 1;
        let index3 = 4;
        let index4 = 8;
        let index5 = 15;
        let index6 = -15;
        let wrongType = "123";
        expect(sut.fibanacciSequence(index1)).toBe(0);
        expect(sut.fibanacciSequence(index2)).toBe(1);
        expect(sut.fibanacciSequence(index3)).toBe(3);
        expect(sut.fibanacciSequence(index4)).toBe(21);
        expect(sut.fibanacciSequence(index5)).toBe(610);
        expect(sut.fibanacciSequence(index6)).toBe(-610);
        expect((wrongType) => {
            sut.fibanacciSequence(wrongType);
        }).toThrow();
        done();
    });

});