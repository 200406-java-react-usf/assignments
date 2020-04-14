const sut = require('./challenge12');

describe('challenge12', () => 
{
    test('test should print \'Invalid result\'', () =>
    {
        expect(sut.ticTacToe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']])).toEqual('Invalid result');
    });
});