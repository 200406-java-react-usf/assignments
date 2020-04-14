const sut = require('./solution-11')

describe('Solution 11 Test', () => {

    /**
     * This test will check that a function passed two array
     * are equally sized and will return true if the contents
     * are the same, regardless of order
     *  Will test:
     * - when passed arrays with same elements in different order
     * - when passed arrays of different sizes
     * - when passed type other than array
     */
    let a=[1,2,3, 'test'], b=['test', 3,1,2], c=[7,8,9,10], d=[1,2,'a'], e=2;


     test('Should return true if same elements in any order', done => {  
        sut.equalArrays(a,b, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual(true);
              done();
          }, ()=>{});
     });

     test('Should return false if not same elements', done => {  
        sut.equalArrays(a,c, val => {
              expect(val).toBeFalsy();
              expect(val).toEqual(false);
              done();
          }, ()=>{});
     });

     test('Should return arrays are not same length', done => {
          sut.equalArrays(a, d,()=> {},  err => {
              expect(err).toBeTruthy();
              expect(err).toEqual('Arrays are not the same length');
              done();
          });
     });

     test('Should return one or more inputs not an array', done => {
        sut.equalArrays(a, e,()=> {},  err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('One or more inputs is not an array.');
            done();
        });
    });
})