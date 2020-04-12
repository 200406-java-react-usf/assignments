const sut = require('./solution-4');

describe('check if string \'test\' is within a given string', () =>{

    test('should output a new string with test removed', done =>{

            let string = 'this is a test string'
            let keyword = 'test'
            expect(sut(string,keyword)).toBe('this is a string');
            done();
    });
});