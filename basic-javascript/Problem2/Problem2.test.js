const sut = require('./Problem2'); //system under test = sut

describe('Problem2', () => {
    
    test('should return true or false depending on whether or not a date given is on a leap year', done => {
        expect.assertions(12);
        let email1 = "JohnDoe@gmail.com"
        let email2 = "JohnDoegmail.com"
        let email3 = "JohnDoe@gmail"
        let email4 = "@gmail.com"
        let email5 = "JohnDoe@.com"
        let email6 = "J@gmail.com"
        let email7 = "JohnDoe@g.com"
        let email8 = "JohnDoe@gmail."
        let email9 = "JohnDoe@gmail.co"
        let email10 = "JohnDoe@gmail.org"
        let email11 = "JohnDoe@gmail.cc"
        let email12 = "JohnDoe@amazon.com"
        expect(sut.checkValidEmail(email1)).toBe(true);
        expect(sut.checkValidEmail(email2)).toBe(false);
        expect(sut.checkValidEmail(email3)).toBe(false);
        expect(sut.checkValidEmail(email4)).toBe(false);
        expect(sut.checkValidEmail(email5)).toBe(false);
        expect(sut.checkValidEmail(email6)).toBe(true);
        expect(sut.checkValidEmail(email7)).toBe(true);
        expect(sut.checkValidEmail(email8)).toBe(false);
        expect(sut.checkValidEmail(email9)).toBe(true);
        expect(sut.checkValidEmail(email10)).toBe(true);
        expect(sut.checkValidEmail(email11)).toBe(true);
        expect(sut.checkValidEmail(email12)).toBe(true);

        done();
    });

});