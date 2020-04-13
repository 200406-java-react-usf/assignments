const sut = require('./solution-twelve');

describe ('Testing the tic tac toe function for each result that could be returned', () => {
    test('testing for a tie', () => {
        expect(sut.ticTacToe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']])).toBe('There was a tie');
    });
    test('testing for a game in progress', () => {
        expect(sut.ticTacToe([['X', 'O', 'X'], ['O', '', 'O'], ['O', 'X', 'O']])).toBe('Game in progress');
    });
    test('testing for a invalid result', () => {
        expect(sut.ticTacToe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']])).toBe('Invalid Result');
    });
    test('testing for top row, x wins', () => {
        expect(sut.ticTacToe([['X', 'X', 'X'], ['O', '', 'O'], ['O', '', 'O']])).toBe('X is the winner');
    });
    test('testing for top row, o wins', () => {
        expect(sut.ticTacToe([['O', 'O', 'O'], ['X', '', 'X'], ['X', '', 'X']])).toBe('O is the winner');
    });
    test('testing for bot row, x wins', () => {
        expect(sut.ticTacToe([['O', '', 'O'], ['O', '', 'O'], ['X', 'X', 'X']])).toBe('X is the winner');
    });
    test('testing for mid row, x wins', () => {
        expect(sut.ticTacToe([['O', '', 'O'], ['X', 'X', 'X'], ['O', '', 'O']])).toBe('X is the winner');
    });
    test('testing for  top left diagonal, x wins', () => {
        expect(sut.ticTacToe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', '', 'X']])).toBe('X is the winner');
    });
    test('testing for top right diagonal, x wins', () => {
        expect(sut.ticTacToe([['O', 'O', 'X'], ['O', 'X', 'O'], ['X', '', 'O']])).toBe('X is the winner');
    });
    test('testing for left column, x wins', () => {
        expect(sut.ticTacToe([['X', '', 'O'], ['X', 'O', ''], ['X', '', 'O']])).toBe('X is the winner');
    });
    test('testing for mid column, x wins', () => {
        expect(sut.ticTacToe([['O', 'X', 'O'], ['', 'X', ''], ['', 'X', 'O']])).toBe('X is the winner');
    });
    test('testing for right column, x wins', () => {
        expect(sut.ticTacToe([['', '', 'X'], ['X', 'O', 'X'], ['O', '', 'X']])).toBe('X is the winner');
    });
});

