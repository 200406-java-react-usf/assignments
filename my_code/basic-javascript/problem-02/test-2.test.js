const sut = require('./solution-2');


describe ('test for vaild email address',() =>{

    test('should return true', done =>{
        let email = 'email@testing.com'
        expect(sut(email)).toBe(true);
        done();
    });

    test('should return false', done =>{
        let email = 'emailtesting.com'
        expect(sut(email)).toBe(false);
        done();
    });

});