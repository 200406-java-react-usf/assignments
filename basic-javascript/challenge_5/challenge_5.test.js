const sut = require("./challenge_5");

const test_1 = [[ 6, "Input was not a string"], [null, "Input was not a string"], [undefined, "Input was not a string"]];
const test_2 = [["My name is Mr.Potato head", "Nz obnf jt Ns.Qpubup ifbe"], 
    ["I am the best in the world", "J bn uif cftu jo uif xpsme" ], 
    ["My favorite # is 11", "Nz gbwpsjuf # jt 11"]];

describe("caesarShift", () => {
    
    test.each(test_1)("throws error is the input is not a string", (a, expectedResult) => {
        expect( () => {sut.caesarShift(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.caesarShift(a)).toBe(expectedResult);
    });
});