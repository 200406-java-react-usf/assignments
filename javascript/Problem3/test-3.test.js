const sut = require('./solution-3');
let str = 'CudaC++';

describe ('testing removal of characters',() => {

    test('returns string with one character removed from 1st slot', done => {
        expect(sut(str, 0)).toBe('udaC++');
        done();
    });

    test('returns string with one character removed from 4th slot', done => {
        expect(sut(str, 3)).toBe('CudC++');
        done();
    });
})