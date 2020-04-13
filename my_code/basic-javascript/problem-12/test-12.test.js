const sut = require('./solution-12');


describe('evaluate a game of tic tac toe', () =>{
   
    test('should throw error Invalid Character On Board', done =>{
        expect(sut([['a', '', 'X'], ['O', '', ''], ['', 'O', '']])).toBe('Invalid Character On Board');
        done();
    });

    test('should return Invalid Result', done => {
        expect(sut([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']])).toBe('Invalid Result');
        done();
    });

    test('should return X is the winner', done => {
        expect(sut([['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']])).toBe('X is the winner');
        done();
    });

    test('should return O is the winner', done => {
        expect(sut([['', 'O', 'X'], ['X', 'O', ''], ['', 'O', 'X']])).toBe('O is the winner');
        done();
    });

    test('should return Game in progress, no winner yet', done => {
        expect(sut([['X', '', 'X'], ['O', '', ''], ['', 'O', '']])).toBe('Game in progress, no winner yet');
        done();
    })
});