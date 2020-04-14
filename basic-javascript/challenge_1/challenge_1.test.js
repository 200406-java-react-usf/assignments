const sut = require("./challenge_1");

const errorMessage1 = "Input is not a Truthy value.";
const errorMessage2 = "dateToBeChecked.getUTCFullYear is not a function";

const test_1 = [[1996, errorMessage2], [null, errorMessage1], ['apple', errorMessage2], ['', errorMessage1]];
const test_2 = [[(new Date("2005")), false], [(new Date("1840")), true], [(new Date("2372")), true], [(new Date("1971")), false]];

describe("isLeapYear", () => {
    
    test.each(test_1)("is passed a Date object", (arg, expectedResult) => {
        expect( () => {sut.isLeapYear(arg)}).toThrow(expectedResult);
    });
    
    test.each(test_2)("returns correct output", (arg, expectedResult) => {
        expect(sut.isLeapYear(arg)).toBe(expectedResult);
    });
});
