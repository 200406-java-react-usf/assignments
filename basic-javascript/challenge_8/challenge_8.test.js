const sut = require("./challenge_8");

const errorMessage = "At least one of the arguments was not an array"
const test_1 = [[ "string", [1,2,3], errorMessage], [[3,6,2,9], 7, errorMessage], 
    [undefined, null, errorMessage]];
const test_2 = [[[5,6,3,7,1,9,6,7], [-1], [4,6,3,7,1,9,6,7]], [[1],[],[1]], [[0,0,0,0], [-4,-7,9,3,2,1], [-4,-7,9,3,2,1]]];

describe("getFibonacci", () => {
    
    test.each(test_1)("throws error if the input is not a number or an integer", (a, b, expectedResult) => {
        expect( () => {sut.sumArrays(a, b)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, b, expectedResult) => {
        expect(sut.sumArrays(a, b)).toBe(expectedResult);
    });
});