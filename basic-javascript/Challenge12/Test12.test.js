const sut = require ('./Challenge_12');
describe('Tictactoe', () => {
    test('Prints Invalid Result', () => {
        expect(sut([[‘X’, ‘X’, ‘X’], [‘O’, ‘O’, ‘O’], [‘X’, ‘O’, ‘X’]])).toBe("Invalid Result");
    });
    test('Prints X is the winner', () => {
        expect(sut(([[‘X’, ‘O’, ‘X’] ,[‘O’, ‘X’, ‘O’], [‘X’, ‘O’, ‘X’]])).toBe("X is the winner");
    });
    test('Prints O is the winner', () => {
        expect(sut([[‘’, ‘O’, ‘X’] , [‘X’, ‘O’, ‘’], [‘‘, ‘O’, ‘X’]])).toBe("O is the winner");
    });
    test('Game in progress, no winner yet', () => {
        expect(sut([[‘X’, ‘’, ‘X’], [‘O’, ‘’, ‘’], [‘’, ‘O’, ‘’]])).toBe("Game in progress, no winner yet");
    });
});