const sut = require('./Challenge2.js');

describe('Email Verification Tests', () => {
    test('Should return true', done => { 
        let email = ('email@test.com')
        expect(sut(email)).toBeTruthy;
        done();
})
    test('Should return false', done => { 
        let email = ('emailtest.com')
        expect(sut(email)).toBeFalsy;
        done();
})
});