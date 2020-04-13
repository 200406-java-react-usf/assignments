const sut = require('./Problem3'); //system under test = sut

describe('Problem3', () => {
    
    test('Removes a character at a specified index given a string & returns the string', done => {
        expect.assertions(5);
        let testString = "test";
        let estring1 = "est";
        let estring2 = "tst";
        let estring3 = "tes";
        let estring4 = "test";
        let wrongType = 15;
        expect(sut.removeCharAt(testString, 1)).toBe(estring1);
        expect(sut.removeCharAt(testString, 2)).toBe(estring2);
        expect(sut.removeCharAt(testString, 4)).toBe(estring3);
        expect(sut.removeCharAt(testString, 5)).toBe(estring4);
        expect((wrongType) => {
            sut.removeCharAt(wrongType);
        }).toThrow();
        done();
    });

});