const sut = require('./solution-12')

describe('Solution 12 Test', () =>{

    /**
     * This test will check that an array contains a tic-tac-toe
     * board, the game is complete/incomplete, if there is a winner
     * the game ends in a tie, or the game is invalid.
     * Will test
     * -x wins
     * -o wins
     * -game is tied
     * -game in progress
     * -game is invalid
     * -input is not an array
     */
    let a = [['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']];
    let b = [['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']];
    let c = [['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']];
    let d = [['X', '', 'X'], ['O', '', ''], ['', 'O', '']];
    let e = 25;

    test('Should return invalid result because multiple winners', done =>{
        sut.ticTacToe(a, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Invalid result');
            done();
        });
    });

    test('Should return X is the winner', done =>{
        sut.ticTacToe(b, val => {
            expect(val).toBeTruthy();
            expect(val).toEqual('X is the winner');
            done();
        }, () => {});
    });

    test('Should return O is the winner', done =>{
        sut.ticTacToe(c, val => {
            expect(val).toBeTruthy();
            expect(val).toEqual('O is the winner');
            done();
        }, () => {});
    });

    test('Should return game in progress', done =>{
        sut.ticTacToe(d, val => {
            expect(val).toBeTruthy();
            expect(val).toEqual('Game in progress, no winner yet');
            done();
        }, () => {});
    });

    test('Should return input not an array', done =>{
        sut.ticTacToe(e, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Input is not an array.');
            done();
        });
    });
})