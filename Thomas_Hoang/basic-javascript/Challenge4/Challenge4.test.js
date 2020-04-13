const sut = require('./Challenge4.js');

describe('Remove Given Word Test', () => {
    test('Should return str without test', done => { 
        expect(sut('This test is a test','test')).toBe('This is a ');
        done();
})
    test('Should return error message', done => { 
        expect( () => {
            sut('This test is a test','for')
        }).toThrow('That word is not found in the string');
        done();
})
});