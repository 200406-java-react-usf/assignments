const sut = require('./solution-12');

describe('solution-12', ()=>    {

    test("Should return Invalid result", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]);
        expect(tst).toEqual('Invalid result');
        done();
    });

    test("Should return X is the winner", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']]);
        expect(tst).toEqual('X is the winner');
        done();
    });
    test("Should return O is the winner", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']]);
        expect(tst).toEqual('O is the winner');
        done();
    });
    test("Should return Game in progress, no winner yet", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]);
        expect(tst).toEqual('Game in progress, no winner yet');
        done();
    });
    test("Should return Tie game", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']]);
        expect(tst).toEqual('Tie game');
        done();
    });
})