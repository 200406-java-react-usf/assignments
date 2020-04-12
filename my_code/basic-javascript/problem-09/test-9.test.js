const sut = require('./solution-9');


describe('find the longest string from a given array of strings', () =>{
   
    test('should output a value of 6', done =>{
        expect(sut(["this","is","a","test","array","of","strings"])).toBe(6);
        done();
    });
    test('should output a value of 2', done =>{
        expect(sut(['this','is','another','test','array','of','strings'])).toBe(2);
        done();
    });
});