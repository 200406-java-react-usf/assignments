const sut = require('./solution-4');

describe('Solution 4 Test', () => {

    
    /**
     * Test will unction to check if the string "test" is 
     * present in a given string. If present, return the 
     * string without any occurrences of “test”, otherwise 
     * return the original one. CHecks if
     * -'test' is in the string
     * -'test' is NOT in the string
     * -if not passed a string
     */
    test('Should return the string with \'test\' removed', done =>{
        sut.removeTest('this test rocks!', str =>{
            expect(str).toBeTruthy();
            expect(str).toEqual('this  rocks!')
            done();
        }, ()=>{});
    });

    test('Should return the input string becasue \'tes\' is not in the string', done =>{
        sut.removeTest('this rocks!' ,str =>{
            expect(str).toBeTruthy();
            expect(str).toEqual('this rocks!')
            done();
        }, ()=>{});
    });

    

    test('Should return error becuase index is not a number', done =>{
        sut.removeTest(25, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Input not a string');
            done();
        });
    });
});