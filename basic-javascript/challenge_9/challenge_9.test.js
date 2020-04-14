const sut = require("./challenge_9");

const errorMessage1 = "The parameter was not an array"
const errorMessage2 = "At least one variable in this array is not a string"

const test_1 = [[ "string", errorMessage1], [3, errorMessage1], 
    [undefined, errorMessage1], [null, errorMessage1]];
const test_2 = [[["hi", "this is a string","but this is the longest string"], 2],
    [['i', 'am', 'an', 'array', ''], 3], [['me', '', '', ''], 0]];
const test_3 = [[['i', 'am', 'a', 8, 'number'], errorMessage2], [['i', 'am', 'a', null, "null"], errorMessage2]];

describe("longestString", () => {
    
    test.each(test_1)("throws error if the input is not a number or an integer", (a, expectedResult) => {
        expect( () => {sut.longestString(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.longestString(a)).toBe(expectedResult);
    });

    test.each(test_3)("throws error if an item in the array is not a string", (a, expectedResult) => {
        expect( () => {sut.longestString(a)}).toThrow(expectedResult);
    });
});