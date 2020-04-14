const sut = require("./challenge_7");

const test_1 = [[ "string", "Input was not an integer"], [null, "Input was not an integer"], 
    [undefined, "Input was not an integer"], [7.83, "Input was not an integer"]];
const test_2 = [[5, 3], [-3, -1], [40, 63245986]];

describe("getFibonacci", () => {
    
    test.each(test_1)("throws error if the input is not a number or an integer", (a, expectedResult) => {
        expect( () => {sut.getFibonacci(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.getFibonacci(a)).toBe(expectedResult);
    });
});