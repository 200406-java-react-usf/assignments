const sut = require('./solution-6');

describe('Solution 6 Test', () => {

     /** 
     * This test will check that when passed a string it will return
     * the number of vowels in that string. Will test:
     *  -when passed a string with vowels
     *  -when passed a string without vowels
     *  -when passed an input not a string
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