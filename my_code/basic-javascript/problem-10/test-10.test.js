const sut = require('./solution-10');


describe('It must return A, B, C, D, or E depending on specified criteria', () =>{
   
    test('should retrieve an output of D', done =>{
        expect(sut('testing')).toBe('D');
        done();
    });
    test('should retrieve an output of E', done =>{
        expect(sut('0esting')).toBe('E');
        done();
    });
    test('should retrieve an output of C', done =>{
        expect(sut('hesting')).toBe('C');
        done();
    });
    test('should retrieve an output of B', done =>{
        expect(sut('besting')).toBe('B');
        done();
    });
    test('should retrieve an output of A', done =>{
        expect(sut('aesting')).toBe('A');
        done();
    });
});