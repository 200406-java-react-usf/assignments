const sut = require('./solution-10')

describe('Solution 10 Test', () => {

    /**
     * This function will take in a string and depending on
     * what the first character of the string is, it will
     * return a specified value.
     *  Will test:
     * - for each return value (A-E)
     * - when passed a non string type
     */
    let a='a', b='d', c='h', d='q', e='1', f=['test'];


     test('Should return A', done => {  
        sut.switches(a, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual('A');
              done();
          }, ()=>{});
     });

     test('Should return B', done => {  
        sut.switches(b, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual('B');
              done();
          }, ()=>{});
     });

     test('Should return C', done => {  
        sut.switches(c, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual('C');
              done();
          }, ()=>{});
     });

     test('Should return D', done => {  
        sut.switches(d, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual('D');
              done();
          }, ()=>{});
     });

     test('Should return E', done => {  
        sut.switches(e, val => {
              expect(val).toBeTruthy();
              expect(val).toEqual('E');
              done();
          }, ()=>{});
     });

     test('Should return input is not a string', done => {
        sut.switches(f,()=> {},  err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Input is not a string');
            done();
        });
   });
});