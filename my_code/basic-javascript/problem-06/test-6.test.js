const sut = require('./solution-6');


describe('count the number of vauls in a given string', () =>{
   
    test('should output the value 5', done =>{
        expect(sut('Korey Keipe')).toBe(5);
        done();
    });
    test('should ouput the value 2', done =>{
        expect(sut('korey')).toBe(2);
        done();
    });
});