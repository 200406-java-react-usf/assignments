const sut = require('./solution-nine');



describe('testing an array of strings, and returning the index of the longest string', () =>{

    test('testing a shorter string', () => {

        expect(sut.findLongestString(['My','Name','Is','Kevin'])).toBe(3);

    });

    test('testing a longer string with long word in middle', () => {

        expect(sut.findLongestString(['My','Last','Name','Is','Wagenheim','My','First','Name','Is','Kevin'])).toBe(4);

    });

    test('testing the thrown error', () => {

        expect(() => {sut.findLongestString(11)}).toThrow();

    });

});