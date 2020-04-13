const sut = require('./Challenge3.js');

describe('Remove Character Test', () => {
    test('Should return test', done => { 
        let str = ('test')
        expect(sut(str,3)).toBe('tes');
        done();
})
    test('Should return error message', done => { 
        let str = ('test')
        expect( () => {
            sut(str,4)
        }).toThrow('There\'s not that many letters in that word.');
        done();
})
});