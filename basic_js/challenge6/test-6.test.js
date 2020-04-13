const sut = require('./solution-6');

describe('testing function to count the vowels in a given string', () =>{

    test('testing string for vowels', () => {

        let randomString = "This is a string";

        expect(sut.countVowels(randomString)).toBe(4)

    })
})