const  sut = require('./solution-6');

describe ('solution-6', () => {

    test('should return the amount of vowels in a given string', () => {

        expect(sut.checkVowels('this is a test')).toEqual(4);

    });

    test('should throw error if non-string value is given', () => {

        expect ( () => {
            sut.checkVowels(4);
        }).toThrow('You did not give me a correct phrase!');
    });

    test('should throw error if empty string is passed', () =>{
        expect ( () => {
            sut.checkVowels('');
        }).toThrow('You didn\'t type anything!');
    })
});