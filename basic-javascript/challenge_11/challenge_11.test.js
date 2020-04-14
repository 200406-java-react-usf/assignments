const sut = require("./challenge_11");

const errorMessage = "At least one of the arguments was not an array"

const test_1 = [[ "string", [1,2,3], errorMessage], [[3,6,2,9], 7, errorMessage], 
    [undefined, null, errorMessage]];
const test_2 = [[[4, 3, 2, 1], [1, 2, 3, 4], true], [[1], [], false], [['a','b','c','d'], ['d','a','c','b'], true]];

describe("compareArrays", () => {
    
    test.each(test_1)("throws error if at least one of the inputs is not an arrayr", (a, b, expectedResult) => {
        expect( () => {sut.compareArrays(a, b)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, b, expectedResult) => {
        expect(sut.compareArrays(a, b)).toBe(expectedResult);
    });
});