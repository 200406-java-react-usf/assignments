const sut = require('./Problem6'); //system under test = sut

describe('Problem6', () => {
    
    test('Counts the number of vowls in a string', done => {
        expect.assertions(4);
        let string1 = "This is a vowel test";
        let string2 = "Thisisavoweltest";
        let string3 = "aa"
        let string4 = "y"
        expect(sut.countVowels(string1)).toBe(6);
        expect(sut.countVowels(string2)).toBe(6);
        expect(sut.countVowels(string3)).toBe(2);
        expect(sut.countVowels(string4)).toBe(0);
        done();
    });

});