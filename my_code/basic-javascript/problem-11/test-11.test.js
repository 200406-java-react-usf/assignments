const sut = require('./solution-11');


describe('Check if two arrays have the same size and contents', () =>{
   
    test('should be true', done =>{
        expect(sut([4,2,8,4,7],[7,4,4,2,8])).toBe(true);
        done();
    });
    test('should be false', done =>{
        expect(sut([4,2,10,4,7],[7,4,4,2,8])).toBe(false);
        done();
    });
    test('should be false', done =>{
        expect(sut([4,2,8],[7,4,4,2,8])).toBe(false);
        done();
    });
});