const sut = require('./Challenge7.js');

describe('Fibbonacci Test', () => {

    test('Should return 1', done => { 
       expect(sut(0)).toBe(1);
       done();
})
    test('Should return 1', done => { 
        expect(sut(1)).toBe(1);
        done();
})
    test('Should return 2', done => { 
        expect(sut(2)).toBe(2);
        done();
})
    test('Should return 3', done => { 
        expect(sut(3)).toBe(3);
        done();
})
    test('Should return 5', done => { 
        expect(sut(4)).toBe(5);
        done();
})
});

