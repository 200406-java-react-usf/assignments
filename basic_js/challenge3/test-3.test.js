const sut = require('./solution-3');

describe('solution-3', () => {
    
    test('Removes char in string location, and gives new string', done => {
        expect.assertions(4);
        let testString = "Check";
        let eString1 = "heck";
        let eString2 = "Ceck";
        let eString3 = "Chck";
        let eString4 = "Chek";
        expect(sut.removeCharAt(testString, 1)).toBe(eString1);
        expect(sut.removeCharAt(testString, 2)).toBe(eString2);
        expect(sut.removeCharAt(testString, 3)).toBe(eString3);
        expect(sut.removeCharAt(testString, 4)).toBe(eString4);
        done();
    });

});