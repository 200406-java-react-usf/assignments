const sut = require('./Challenge11.js');

describe('ArrayContentsNSize Test', () => {

    test('Same size - Should result in true', done => { 
        expect(sut([1, 2, 3], [3, 2, 1])).toBeTruthy()
        done();
    })
    test('Same Size - Should result in false', done => { 
        expect(sut([3, 3, 3], [3, 2, 1])).toBeTruthy()
        done();
    })
    test('Different Size - Should result in false', done => { 
        expect(sut([1, 2], [3, 2, 1])).toBeFalsy();
        done();
    })
});

