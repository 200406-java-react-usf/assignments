const sut = require("./challenge_2");


const errorMessage = "Input is not valid";

const test_1 = [[1996, errorMessage], [null, errorMessage], [[1,2], errorMessage], [undefined, errorMessage]];
const test_2 = [['imValid@see.com', true], ['this@isnt.o', false], ["Igotnumbers12345@gmail.com", true], ['Just a string', false]];

describe("isValidEmail", () => {
    
    test.each(test_1)("is passed a string", (arg, expectedResult) => {
        expect( () => {sut.isValidEmail(arg)}).toThrow(expectedResult);
    });
    
    test.each(test_2)("returns correct output", (arg, expectedResult) => {
        expect(sut.isValidEmail(arg)).toBe(expectedResult);
    });
});
