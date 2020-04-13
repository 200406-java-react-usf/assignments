const sut = require('./Problem12'); //system under test = sut

describe('Problem12', () => {
    
    test('Inputs a tic tac toe board. Should have a result for a tie, each winner, or an invalid game', done => {
        expect.assertions(7);
        let board1 =[['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']];
        let board2 =[['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']];
        let board3 =[['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']];
        let board4 =[['X', '', 'X'], ['O', '', ''], ['', 'O', '']];
        let board5 =[['X', '', 'X'], ['X', '', ''], ['', 'O', '']];
        expect(sut.tictactoe(board1)).toEqual("Invalid result");
        expect(sut.tictactoe(board2)).toEqual("X is the winner");
        expect(sut.tictactoe(board3)).toEqual("O is the winner");
        expect(sut.tictactoe(board4)).toEqual("Game in progress, no winner yet");
        expect(sut.tictactoe(board5)).toEqual("Invalid result");

        //type testing
        let wrongType1 = "I'm clearly not a board";
        let wrongType2 =[['X', 123, 'X'], ['X', '', ''], ['', 'O', '']];
        expect((wrongType1) => {
            sut.tictactoe(wrongType1);
        }).toThrow();
        expect((wrongType2) => {
            sut.tictactoe(wrongType2);
        }).toThrow();
        done();
    });

});