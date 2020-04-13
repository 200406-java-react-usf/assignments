const sut = require('./solution-2')

describe ('solution-2' ,() =>{

    test('should return true', done =>{
        let email = 'email@testing.com'
        expect(email).toBeTruthy()
        done()
    })
})