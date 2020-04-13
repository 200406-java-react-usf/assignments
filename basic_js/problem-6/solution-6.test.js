const sut = require('./solution-6');

describe('Solution 6 Test', () => {

     /** 
     * This test will check that when given a string and index
     * the function will return a string where each character has
     * been shifted the number indicated by the index. Will check
     * to make sure the inputs are the correct type and 
    */
   test('Should return number of vowels within the string', done => {
        sut.getVowels('test', str => {
            expect(str).toBeTruthy();
            expect(str).toEqual(1);
            done();
        }, ()=>{});
    });

    test('Should return error because string contains no vowels', done => {
        sut.getVowels('25',  () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('No vowels found');
            done();
        });
    });

    test('Should return error because input is not a string', done => {
        sut.getVowels(25,  () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Input is not a string');
            done();
        });
    });
});