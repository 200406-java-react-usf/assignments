const sut = require('./Challenge8.js');

describe('Fibbonacci Test', () => {

    test('Should sum of 2 arrays', done => { 
       expect(sut([0 , 1, 2, 3, 4, 5], [1, 2, 3])).toStrictEqual([ 1, 3, 5, 3, 4, 5 ]);
       done();
})
    test('Should sum of 2 arrays and swap the arrays as intended', done => { 
        expect(sut([1, 2, 3],[0 , 1, 2, 3, 4, 5])).toStrictEqual([ 1, 3, 5, 3, 4, 5 ]);
        done();
})
    test('Throws intended error', done => { 
        expect(() => {
            sut([1, 2, 3],[0 , 1, 2,])
            }).toThrow('The arrays are the same size');
        done();
})
});

