// tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]) 
// prints “Invalid result”

// tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']])
// Prints “X is the winner”

// tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']]) 
// Prints “O is the winner”

// 	tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]) 
// Prints “Game in progress, no winner yet”

const sut = require('./solution-12');

describe('solution-12', ()=>{
    test("tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]) should return Invalid result", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]);
        expect(tst).toEqual('Invalid result');
        done();
    });

    test("tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']]) should return X is the winner", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']]);
        expect(tst).toEqual('X is the winner');
        done();
    });
    test("tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']]) should return O is the winner", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']]);
        expect(tst).toEqual('O is the winner');
        done();
    });
    test("tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]) should return Game in progress, no winner yet", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]);
        expect(tst).toEqual('Game in progress, no winner yet');
        done();
    });
    test("tictactoe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']]) should return Tie game", done => {
        expect.assertions(1);
        let tst = sut.tictactoe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']]);
        expect(tst).toEqual('Tie game');
        done();
    });
})