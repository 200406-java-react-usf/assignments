const sut = require('./challenge5');

const completeTest = [
    ['WXYZ', 4, 'abcd'],
    ['ABC', 3, 'def'],
    ['fjkldsajkl', 100, 'bfghzowfgh']
]

const errorMessage = 'Parameters are incorrect';
const failCode = [
    [4, "WXYZ", errorMessage],
    [, , errorMessage],
    [4, 4, errorMessage],
    [4, "WXYZ", errorMessage]
]

describe("check to see if the function is outputting the correct function", () => {
    test.each(completeTest)('this should print out new caesarShift stuff',
        (firstArg, secondArg, expectedResult) => {
            const result = sut.caesarShift(firstArg, secondArg);
            expect(result).toEqual(expectedResult);
        }
    );
});

describe('checks to see if the throw error conditions are working', () => {
    test.each(failCode)(`this should print ${errorMessage}`,
        (firstArg, secondArg, expectedResult) => {
            expect(() => { sut.caesarShift(firstArg, secondArg) }).toThrow(expectedResult)
        })
})