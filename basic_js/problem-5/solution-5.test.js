const sut = require('./solution-5');

describe('Solution 5 Test', () => {
    /** 
     * This test will check that when given a string and index
     * the function will return a string where each character has
     * been shifted the number indicated by the index. Will check
     * to make sure the inputs are the correct type and 
    */
   test('Should return string after completing Cesearean shift', done => {
       sut.caesarShift('test', 2, str => {
           expect(str).toBeTruthy();
           expect(str).toEqual('vguv');
           done();
       }, ()=>{});
   });

   test('Should return string after completing Cesearean shift when index is negative', done => {
    sut.caesarShift('test', -2, str => {
        expect(str).toBeTruthy();
        expect(str).toEqual('rcqr');
        done();
    }, ()=>{});
    });

    test('Should return error because string is not provided', done => {
        sut.caesarShift(34, 2, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Input provided is not a string.');
            done();
        });
    });

    test('Should return error because index is not an integer', done => {
        sut.caesarShift('test', 2.5, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Shift amount is not an integer.');
            done();
        });
    });

    test('Should return error because index is not an integer', done => {
        sut.caesarShift('test', 'a', () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Shift amount is not an integer.');
            done();
        });
    });

}); 