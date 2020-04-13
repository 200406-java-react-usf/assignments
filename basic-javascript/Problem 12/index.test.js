const ttt = require('./index');

describe('TicTacToe', () => {
    test('expect the 2D array to have a X winner', () => {
        expect(ttt.tictactoe([[`X`, `O`, `X`], [`O`, `X`, `O`], [`X`, `O`, `X`]])).toBe('X is the winner');
    });
    test('expect the 2D array to have a O winner', () => {
        expect(ttt.tictactoe([[`X`, `O`, `X`], [`X`, `O`, `O`], [`O`, `O`, `X`]])).toBe('O is the winner');
    });
    test('expect the 2D array to have a game in progress', () => {
        expect(ttt.tictactoe([[`X`, ``, `X`], [`O`, ``, ``], [``, `O`, ``]])).toBe('Game in progress, no winner yet');
    });
    test('expect the 2D array to have an invalid result', () => {
        expect(ttt.tictactoe([[`X`, `X`, `X`], [`O`, `O`, `O`], [``, `O`, ``]])).toBe('Game invalid');
    });
    test('expect the 2D array to have X winner', () => {
        expect(ttt.tictactoe([[`O`, `X`, `X`], [`O`, `X`, ``], [``, `X`, `O`]])).toBe('X is the winner');
    })
})
