const sut = require('./solution-12');

describe('solution-12', () => {

    // test('should return the correct winner', () => {

        

    // });

    test('should throw an error if character is not "X","O" or empty string', () => {
        expect( () => {
            sut.ticTacToe([['a'],['b'],['c']]);
        }).toThrow('Invalid character on board');
    });

    test('should throw an error if non-array value is passed', () => {
        expect( () => {
            sut.ticTacToe(4);
        }).toThrow('You did not send me an array');
    });

    test('should throw an error if a 3x3 array is not passed in', () => {
        expect ( () => {
            sut.ticTacToe(['X','X','X','X','X']);
        }).toThrow('Your tic-tac-toe board is only supposed to be 3x3!');
    });

    test('should return invalid result because there are two winners', () => {
        expect(sut.ticTacToe([['X','X','X'],['O','O','O'],['X','O','X']])).toBe('Invalid result');
    });

    test('should return that X is the winner', () => {
        expect(sut.ticTacToe([['X','O','X'],['O','X','O'],['X','O','X']])).toBe('X is the winner!');
    });

    test('should return that O is the winner', () => {
        expect(sut.ticTacToe([['','O','X'],['X','O',''],['','O','X']])).toBe('O is the winner!');
    });

    test('should state that the game is still going on and there is no winner yet', () => {
        expect(sut.ticTacToe([['X','','X'],['O','',''],['','O','']])).toBe('The game is still going on')
    });

})