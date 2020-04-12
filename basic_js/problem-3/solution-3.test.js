const sut = require('./solution-3');

describe('Solution 3 Test', () => {

    /**
     * Test will check that when given a string and index
     * the string will return minus the character at that inde.
     * Will check if index is not a number, and not inside of the string.
     */
    test('Should return the string missing the character at the give index', done =>{
        sut.removeChar('Test', 3, str =>{
            expect(str).toBeTruthy();
            expect(str).toEqual('Thi is a test.')
            done();
        }, ()=>{});
    }, 15000);
}, )