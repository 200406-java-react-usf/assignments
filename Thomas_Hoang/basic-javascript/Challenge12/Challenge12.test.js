const sut = require('./Challenge12.js');

describe('ArrayContentsNSize Test', () => {

    test('x Win Condition 0', done => { 
        expect(sut([['x', 'x', 'x'], ['', '', ''], ['', '', '']])).toBe('X is the winner')
        done();
    })
    test('o Win Condition 0', done => { 
        expect(sut([['o', 'o', 'o'], ['', '', ''], ['', '', '']])).toBe('O is the winner')
        done();
    })
    test('Game still in progress', done => { 
        expect(sut([['x', 'o', 'x'], ['', '', ''], ['', '', '']])).toBe('The game is still in progress')
        done();
    })
    test('Invalid Game', done => { 
        expect(sut([['x', 'x', 'x'], ['o', 'o', 'o'], ['', '', '']])).toBe('Invalid Game')
        done();
    })
    test('Tie', done => { 
        expect(sut([['o', 'x', 'o'], ['x', 'x', 'o'], ['x', 'o', 'x']])).toBe('It\'s a tie')
        done();
    })
});

