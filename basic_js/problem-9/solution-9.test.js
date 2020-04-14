const sut = require('./solution-9')

describe('Solution 9 Test', () => {

    /**
     * This test will run solution 9 and check that 
     * when the function is passed an array of strings 
     * it will return the index of the longest string.
     *  Will test:
     * - when passed an array of strings of varying lengths

     * - when passed a type other than array 
     */ 
    let a=['this', 'is', 'an', 'array'], b =2;


     test('Should return the index of longest string when passed an array of strings of varying lengths', done => {  
        sut.longString(a, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual(3);
              done();
          }, ()=>{});
     });



     test('Should return one or more elements is not a string', done => {
          sut.longString(b,()=> {},  err => {
              expect(err).toBeTruthy();
              expect(err).toEqual('Input is not an array.');
              done();
          });
     });

});