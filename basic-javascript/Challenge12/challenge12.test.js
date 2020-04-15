const sut = require('./challenge12');

describe('challenge12', () => 
{
    test('test should print \'The board state is invalid, only 1 player can win\'', () =>
    {
        expect(sut.ticTacToe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']])).toEqual('The board state is invalid, only 1 player can win');
    });

    test('test should print \'X is the winner\'', () =>
    {
        expect(sut.ticTacToe([['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']])).toEqual('X is the winner');
    });

    test('test should print \'O is the winner\'', () =>
    {
        expect(sut.ticTacToe([['', 'O', 'X'], ['X', 'O', ''], ['', 'O', 'X']])).toEqual('O is the winner');
    });

    test('test should print \'Game in progress, no winner yet\'', () =>
    {
        expect(sut.ticTacToe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']])).toEqual('Game in progress, no winner yet');
    });
});
