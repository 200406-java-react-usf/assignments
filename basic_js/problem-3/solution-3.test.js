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
            expect(str).toEqual('Tes')
            done();
        }, ()=>{});
    });

    test('Should return error becuase index is out of array', done =>{
        sut.removeChar('Test', 6, () =>{}, err=> {
            expect(err).toBeTruthy();
            expect(err).toEqual('Oh no the index is not in the string')
            done();
        });
    });

    test('Should return error becuase index is not a number', done =>{
        sut.removeChar('Test', 'a', () =>{}, err=> {
            expect(err).toBeTruthy();
            expect(err).toEqual('index not a integer')
            done();
        });
    });

    test('Should return error becuase input not a string', done =>{
        sut.removeChar(25, 'a', () =>{}, err=> {
            expect(err).toBeTruthy();
            expect(err).toEqual('input not a string')
            done();
        });
    });
});