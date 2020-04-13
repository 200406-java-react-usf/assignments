const sut = require('./solution-11')

describe('solution-11', ()=>{
    test("arrCheck([4,2,8,4,7],[7,4,4,2,8]) should return true", done => {
        expect.assertions(1)
        let arrEquality = sut.arrCheck([4,2,8,4,7],[7,4,4,2,8])
        expect(arrEquality).toBe(true)
        done()
    })
    test("arrCheck([4,2,8,4,7],[7,5,4,2,8]) should return false", done => {
        expect.assertions(1)
        let arrEquality = sut.arrCheck([4,2,8,4,7],[7,5,4,2,8])
        expect(arrEquality).toBe(false)
        done()
    })
    test("arrCheck([4,2,8,4],[7,5,4,2,8]) should return false", done => {
        expect.assertions(1)
        let arrEquality = sut.arrCheck([4,2,8,4],[7,5,4,2,8])
        expect(arrEquality).toBe(false)
        done()
    })
})