const sut = require('./solution-8');


describe('add the values of multiple arrays', () =>{
   
    test('should output and array [4,4,4]', done =>{
        expect(sut([1,2,3],[3,2,1])).toStrictEqual([4,4,4]);
        done();
    });
    test('', done =>{
        expect(sut([1,2,3,4,5], [1,2,3])).toStrictEqual([2,4,6,4,5]);
        done();
    });
});