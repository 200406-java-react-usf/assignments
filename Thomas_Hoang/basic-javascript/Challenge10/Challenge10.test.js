const sut = require('./Challenge10.js');

describe('First Character Test', () => {

    test('Should result in A', done => { 
        expect(sut('acd')).toBe('A')
        done();
})
    test('Should result in B', done => { 
        expect(sut('bcd')).toBe('B')
        done();
})
    test('Should result in C', done => { 
        expect(sut('hcd')).toBe('C')
        done();
})
    test('Should result in D', done => { 
        expect(sut('ncd')).toBe('D')
        done();
})
    test('Should result in E', done => { 
        expect(sut('2cd')).toBe('E')
        done();
})
    test('Throws intended error', done => { 
        sut('', err => {
            expect(err).ToBeTruthy()
            expect(err).toThrow('This is not a string.');
            done();
        })
        done();
})
});

