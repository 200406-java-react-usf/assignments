const sut = require('./solution-12.js');

describe('tictactoe', () => {
    test('test 1: [["O","O", "O"], ["X","X","X"], ["O","O","O"]]', done => {
        expect(sut([["O","O", "O"], ["X","X","X"], ["O","O","O"]])).toEqual("Not Valid");
        done();
    });
    test('test 2: [["O","O", "O"], ["X","O","X"], ["O","O","O"]]', done => {
        expect(sut([["O","O", "O"], ["X","O","X"], ["O","O","O"]])).toEqual("O wins");
        done();
    });
    test('test 3: [["O","", "O"], ["X","O","X"], ["O","",""]]', done => {
        expect(sut([["O","O", "O"], ["X","O","X"], ["O","O","O"]])).toEqual("O wins");
        done();
    });
    test('test 4: [["x","O", "X"], ["O","X","O"], ["X","O","X"]]', done => {
        expect(sut([["X","O", "X"], ["O","X","O"], ["X","O","X"]])).toEqual("X wins");
        done();
    });
    test('test 5: [["O","X", "O"], ["O","X","O"], ["X","O","X"]]', done => {
        expect(sut([["O","X", "O"], ["O","X","O"], ["X","O","X"]])).toEqual("Draw");
        done();
    });
    test('test 6: [["","", ""], ["X","O","X"], ["","",""]]', done => {
        expect(sut([["","", ""], ["X","O","X"], ["","",""]])).toEqual("Game not finished!");
        done();
    });
    
    test('string input', done => {
        sut("12345", err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad array request');
            done();
        });
        done();
    });
    test('4 lines', done => {
        sut([["O","X","O"], ["X","O","X"],["O","X","O"], ["X","O","X"]], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('too many lines');
            done();
        });
        done();
    });
    test('int input in 2nd layer', done => {
        sut([1, ["O","X","O"], ["X","O","X"]], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad array in input arr');
            done();
        });
        done();
    });
    test('wrong symbol', done => {
        sut([["A","A", "A"], ["O","X","O"], ["X","O","X"]], err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad input on grid');
            done();
        });
        done();
    });
});