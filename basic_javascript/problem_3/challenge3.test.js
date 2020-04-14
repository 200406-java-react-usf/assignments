const sut = require('./challenge3')

const completeTest = [
    ['jeremy is very cool', 18, 'jeremy is very coo'],
    ['testing', 0, 'esting'],
    ['testing', 1, 'tsting'],
    ['testing', 2, 'teting'],
    ['testing', 4, 'testng'],
    ['testing', 5, 'testig']
];

const failTest = [
    [18, "testing", "First parameter needs to be a string"],
    ['testing', '5', "Second parameter needs to be a number or number is not in range of string"],
    [, , "First parameter needs to be a string"],
    ['testing', , "Second parameter needs to be a number or number is not in range of string"],
]

describe("check to see if a char is removed in a given spot", () => {
    test.each(completeTest)('this will print out a new string with the missing char', (firstArg, secondArg, expectedResult) => {
        const result = sut.removeChar(firstArg, secondArg)
        expect(result).toEqual(expectedResult);
    });
});

describe("check to see return", () => {
    test.each(failTest)('error will be thrown', (firstArg, secondArg, expectedResult) => {
        expect(() => { sut.removeChar(firstArg, secondArg) }).toThrow(expectedResult);
    });
});

// test("Removes character in a given spot", () => {
//     expect(sut.removeChar("jeremy is very cool", 18))
// });

// test("suppose to return error message", () => {
//     expect(sut.removeChar("jeremy is very cool", 20))
// });

// test("suppose to return error message ", () => {
//     expect(sut.removeChar(20, "jeremy is very cool"))
// });