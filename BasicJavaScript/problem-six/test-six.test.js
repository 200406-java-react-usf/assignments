const sut = require('./solution-six');


describe('testing function to count the vowels in a given string', () =>{

    test('testing a random string', () => {

        let randomString = "vowel";

        expect(sut.testForVowels(randomString)).toBe(2);

    });

    test('testing a longer string', () => {

        let randomString = "Hello! My name is Kevin";

        expect(sut.testForVowels(randomString)).toBe(7);

    });

});