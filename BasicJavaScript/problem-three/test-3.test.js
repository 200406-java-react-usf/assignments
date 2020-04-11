const sut = require('./solution-three');

describe('test for removing a char from a string at a specific index', () =>{

    test('should return "My tring', () => {

        let randomString = 'My String';
        let deleteThisChar = 3;

        expect(sut.deleteTheChar(randomString,deleteThisChar)).toBe('My tring');

    });

    test('should return "My Sting", testing different index', () => {

        let randomString = 'My String';
        let deleteThisChar = 5;

        expect(sut.deleteTheChar(randomString,deleteThisChar)).toBe('My Sting');

    });

    test('should return "Hi! My ame is Kevin.", testing different string', () => {

        let myNameString = 'Hi! My name is Kevin.';
        let deleteThisChar = 7;

        expect(sut.deleteTheChar(myNameString,deleteThisChar)).toBe('Hi! My ame is Kevin.');

    });

});