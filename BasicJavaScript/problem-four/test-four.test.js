const sut = require('./solution-four');

describe('looping through a string, looking for the word "test" and removing it if its there', () =>{

    test('testing the func', () => {

        let testString = "test";
        let stringToFindTestIn = "testing";

        expect(sut.removeTestString(testString,stringToFindTestIn)).toBe('ing');

    });

    test('testing the func, adding words before and after the word "test" ', () => {
        
        let testString = "test";
        let stringToFindTestIn = "I am testing";

        expect(sut.removeTestString(testString,stringToFindTestIn)).toBe('I am ing');

    });

    test('testing the func withe a phrase without test in it, should return whole phrase ', () => {
        
        let testString = "test";
        let stringToFindTestIn = "Not in here";

        expect(sut.removeTestString(testString,stringToFindTestIn)).toBe('Not in here');

    });

});