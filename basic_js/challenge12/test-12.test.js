const sut = require('./solution-12')

describe('solution-12', ()=>{
    test("should return Invalid result", done => {
        expect.assertions(1)
        let game = sut.tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']])
        expect(game).toEqual('Invalid result')
        done()
    });

    test("should return X is the winner", done => {
        expect.assertions(1)
        let game = sut.tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']])
        expect(game).toEqual('X is the winner')
        done()
    });
    test("should return O is the winner", done => {
        expect.assertions(1)
        let game = sut.tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']])
        expect(game).toEqual('O is the winner')
        done()
    });
    test("should return Game in progress, no winner yet", done => {
        expect.assertions(1)
        let game = sut.tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']])
        expect(game).toEqual('Game in progress, no winner yet')
        done()
    })
    test("should return Tie game", done => {
        expect.assertions(1)
        let game = sut.tictactoe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']])
        expect(game).toEqual('Tie game')
        done()
    })
})