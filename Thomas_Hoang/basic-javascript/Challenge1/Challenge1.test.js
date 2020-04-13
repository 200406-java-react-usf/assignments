const sut = require('./Challenge1.js');

describe('Leap year tests', () => {
    test('Short Form Date - Should return true', done => { 
        let year = new Date('01/01/2000') 
        expect(sut(year)).toBeTruthy;
        done();
})
    test('Just Year - Should return true', done => {
        let year = new Date('2000') 
        expect(sut(year)).toBeTruthy;
        done();
    })
    test('Long Form - Should return true', done => {
        let year = new Date('01 Jan 2000') 
        expect(sut(year)).toBeTruthy;
        done();
    })
    test('Short Form Date - Should return false', done => { 
        let year = new Date('01/01/2001') 
        expect(sut(year)).toBefalsy;
        done();
})
    test('Just Year - Should return false', done => {
        let year = new Date(2001) 
        expect(sut(year)).toBefalsy;
        done();
    })
    test('Long Form - Should return false', done => {
        let year = new Date('01 Jan 2001') 
        expect(sut(year)).toBefalsy;
        done();
    })
});