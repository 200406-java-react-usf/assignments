const sut = require("./challenge_4");

const test_1 = [[ 6, "Input was not a string"], [null, "Input was not a string"], [undefined, "Input was not a string"]];
const test_2 = [["My name is Mr.Potato head", "My name is Mr.Potato head"], 
    ["I am the btest est in the world", "I am the b est in the world" ], 
    ["Testget ritestd of itestt", "get rid of it"]];

describe("removeTest", () => {
    
    test.each(test_1)("throws error is the input is not a string", (a, expectedResult) => {
        expect( () => {sut.removeTest(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.removeTest(a)).toBe(expectedResult);
    });
});