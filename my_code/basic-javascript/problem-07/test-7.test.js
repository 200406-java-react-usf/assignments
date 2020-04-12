const sut = require('./solution-7');

describe('returns the corresponding value of the Fibonacci sequence', () =>{
   
    test('should output a value of 5', done =>{
        expect(sut(-4)).toBe(-3);
        done();
    });
    test('should output a value of 5', done =>{
        expect(sut(4)).toBe(3);
        done();
    });
    test('should output a value of 5', done =>{
        expect(sut(5)).toBe(5);
        done();
    });
    test('should output a value of 5', done =>{
        expect(sut(-5)).toBe(5);
        done();
    });
});