const sut = require('./Problem10'); //system under test = sut

describe('Problem10', () => {
    
    test('returns A, B, C, D, or E depending on the specific criteria', done => {
        expect.assertions(9);
        let string1 = "alphabet";
        let string2 = "squirrel";
        let string3 = "nouns";
        let string4 = "words";
        let string5 = "javascript";
        let string6 = "C++";
        let string7 = "%@#^@#";
        let string8 = "####";
        let string9 = 'chickens';
        let date1 = new Date("October 1, 1999 22:02:05");
        expect(sut.determineCase(string1)).toBe('A');
        expect(sut.determineCase(string2)).toBe('D');
        expect(sut.determineCase(string3)).toBe('D');
        expect(sut.determineCase(string4)).toBe('E');
        expect(sut.determineCase(string5)).toBe('C');
        expect(sut.determineCase(string6)).toBe('E');
        expect(sut.determineCase(string7)).toBe('E');
        expect(sut.determineCase(string8)).toBe('E');
        expect(sut.determineCase(string9)).toBe('B');
        done();
    });

});