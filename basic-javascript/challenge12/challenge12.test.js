  
const sut = require('./challenge12');

describe('TicTacToe', () => {
    test('Game should end in invalid result', () => {
        expect(tictactoe([[`X`, `X`, `X`], [`O`, `O`, `O`], [``, `O`, ``]])).toBe('Invalid result');
    });
    test('X should win the game', () => {
        expect(tictactoe([[`X`, `O`, `X`], [`O`, `X`, `O`], [`X`, `O`, `X`]])).toBe('X is the winner');
    });
    test('O should be the winner of this game', () => {
        expect(tictactoe([[`X`, `O`, `X`], [`X`, `O`, `O`], [`O`, `O`, `X`]])).toBe('O is the winner');
    });
    test('should return game in progress', () => {
        expect(tictactoe([[`X`, ``, `X`], [`O`, ``, ``], [``, `O`, ``]])).toBe('Game in progress, no winner yet');
    });
    test('should return game in progress', () => {
        expect(tictactoe([[`S`, ``, `X`], [`O`, ``, ``], [``, `O`, ``]])).toBe('Invalid Only Xs and Os are allowed in the board');
    });
});
