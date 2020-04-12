const sut = require('./Problem4'); //system under test = sut

describe('Problem4', () => {
    
    test('returns a string with all occurences of "test" removed', done => {
        expect.assertions(6);
        let string1 = "this test is a test demo";
        let estring1 = "this is a demo";
        let string2 = "test";
        let estring2 = "";
        let string3 = "test this is a test";
        let estring3 = " this is a";
        let string4 = "this is a test";
        let estring4 = "this is a";
        let string5 = "test this is a";
        let estring5 = " this is a"
        let string6 = "abctestabc"
        let estring6 = "abcabc"
        expect(sut.deleteOccurencesofTest(string1)).toBe(estring1);
        expect(sut.deleteOccurencesofTest(string2)).toBe(estring2);
        expect(sut.deleteOccurencesofTest(string3)).toBe(estring3);
        expect(sut.deleteOccurencesofTest(string4)).toBe(estring4);
        expect(sut.deleteOccurencesofTest(string5)).toBe(estring5);
        expect(sut.deleteOccurencesofTest(string6)).toBe(estring6);
        done();
    });

});