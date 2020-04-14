const sut = require("./challenge_6");

const test_1 = [[ 6, "Input was not a string"], [null, "Input was not a string"], [undefined, "Input was not a string"]];
const test_2 = [["My name is Mr.Potato head", 8], ["I am the best in the world", 7], ["My favorite # is 11", 5]];

describe("countVowels", () => {
    
    test.each(test_1)("throws error is the input is not a string", (a, expectedResult) => {
        expect( () => {sut.countVowels(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.countVowels(a)).toBe(expectedResult);
    });
});