const sut = require('./solution-8')

describe('Solution 8 Test', () => {

    /**
     * This test will test that when passed two arrays regardless of
     * the size of each (can be different size), will add together
     * and return the summed array. If no elemet exists for a given
     * array will assume zero,
     *  Will test:
     * - when passed equal size arrays
     * - when passed unequal sized arrays
     * - when passed at least one array with elements other than a number
     * - when passed type other than array
     */
    let a=[1,2,3], b=[4,5,6], c=[7,8,9,10], d=[1,2,'a'], e=2;


     test('Should return the sum of two equal sized arrays', done => {  
        sut.sumArrays(a,b, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual([5,7,9]);
              done();
          }, ()=>{});
     });

     test('Should return the sum of two unequal sized arrays', done => {  
        sut.sumArrays(a,c, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual([8,10,12,10]);
              done();
          }, ()=>{});
     });

     test('Should return one or more inputs not an array', done => {
          sut.sumArrays(a, d,()=> {},  err => {
              expect(err).toBeTruthy();
              expect(err).toEqual('One or more values in the array is not a number');
              done();
          });
     });

     test('Should return one or more inputs not an array', done => {
        sut.sumArrays(a, e,()=> {},  err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('One or more inputs is not an array.');
            done();
        });
   });

});