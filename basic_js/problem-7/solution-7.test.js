const sut = require('./solution-7')

describe('Solution 7 Test', () => {

    /**
     * This test will test that when passed an integer, it 
     * returns the corresponing number in the Fibonacci 
     * sequence. Will test:
     * - when passed a positive integer
     * - when passed a negative integer
     * - when passed type other than integer
     */

     test('Should return the correct number in the Fibonacci sequence', done => {
          sut.fibonacci(1, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual(1);
              done();
          }, ()=>{});
     });

     test(`Should return the correct number in the Fibonacci
      sequence for a negative number`, done => {
          sut.fibonacci(-4, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual(-3);
              done();
          }, ()=>{});
     });

     test(`Should return an error if given non-integer`, done => {
          sut.fibonacci(-4.66,()=> {},  err => {
              expect(err).toBeTruthy();
              expect(err).toEqual('Input is not an integer.');
              done();
          });
     });

     test(`Should return an error if given non-integer`, done => {
        sut.fibonacci('a',()=> {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Input is not an integer.');
            done();
        });
   });
});