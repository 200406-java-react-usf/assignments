const sut = require("./challenge_3");

const test_1 = [[ 6, 7, "Invalid inputs"], ["apples are my favorite fruit", 'q', "Invalid inputs"]];
const test_2 = [["My name is Mr.Potato head", 17, "My name is Mr.Potto head"], 
    ["I am the beast in the world", 11, "I am the best in the world"], ["get ri&d of it", 6, "get rid of it"]];

describe("deleteChar", () => {
    
    test.each(test_1)("throws error if inputs are not valid", (a, b, expectedResult) => {
        expect( () => {sut.deleteChar(a, b)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, b, expectedResult) => {
        expect(sut.deleteChar(a, b)).toBe(expectedResult);
    });
});