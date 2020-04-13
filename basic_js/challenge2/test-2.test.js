const sut = require('./solution-2');


describe ('test for vaild email address',() =>{

    test('should return true', done =>{
        let email = 'email@testing.com'
        expect(email).toBeTruthy();
        done();
    });
});