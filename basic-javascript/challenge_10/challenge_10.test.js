const sut = require("./challenge_10");

const errorMessage = "Input was not a string";

const test_1 = [[ 6, errorMessage], [null, errorMessage], [undefined, errorMessage]];
const test_2 = [["my name is Mr.Potato head", 'C'], ["i am the best in the world", 'A'], 
    ["blue is not my favorite color", 'B'], ["zebras are striped", 'D'], ["I dont start with a lower case", 'E']];

describe("myFunction", () => {
    
    test.each(test_1)("throws error is the input is not a string", (a, expectedResult) => {
        expect( () => {sut.myFunction(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.myFunction(a)).toBe(expectedResult);
    });
});