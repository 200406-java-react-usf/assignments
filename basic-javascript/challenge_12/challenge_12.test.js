const sut = require("./challenge_12");

const errorMessage = "The gameboard is not in the correct format.";
const tieGame = "It was a tie";
const invalidGame = "Invalid result";
const xWins = 'X is the winner';
const oWins = 'O is the winner';
const gameInProgress = 'Game in progress, no winner yet';
const errorMessage2 = "Invalid character used!";

const test_1 = [[[['X', 'O', 'X'], ['O', 'X', 'O']], errorMessage], [[['X', 'O'], ['O', 'X', 'O'], ['O', 'X', 'O']], errorMessage], 
    [[['X', 'O', ''], "string", ['O', 'X', 'O']], errorMessage], [6, errorMessage]];
const test_2 = [[[['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']], tieGame], 
                [[['X', 'O', 'X'], ['X', 'O', 'O'], ['X', 'O', 'O']], invalidGame],
                [[['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'O', 'X']], xWins],
                [[['O', 'O', 'X'], ['X', 'O', 'O'], ['X', 'O', 'X']], oWins],
                [[['X', 'O', ''], ['', '', 'O'], ['X', '', 'O']], gameInProgress]];
const test_3 = [[[['X', 'O', 'X'], ['O', 'B', 'O'], ['O', 'X', 'O']], errorMessage2], 
                [[['X', 'O', 'X'], ['X', 'O', 'O'], ['X', '6', 'O']], errorMessage2],
                [[['X', 'O', null], ['X', 'O', 'O'], ['X', 'X', 'O']], errorMessage2]];

describe("whoWins", () => {
    
    test.each(test_1)("throws error if there is no 3x3 tic tac toe board input", (a, expectedResult) => {
        expect( () => {sut.whoWins(a)}).toThrow(expectedResult);
    });

    test.each(test_2)("gives correct outputs", (a, expectedResult) => {
        expect(sut.whoWins(a)).toBe(expectedResult);
    });

    test.each(test_3)("throws error if at least one of the characters in the board is not 'X', 'O', or ''", (a, expectedResult) => {
        expect( () => {sut.whoWins(a)}).toThrow(expectedResult);
    });
});