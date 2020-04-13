const sut = require('./solution-10')

describe('solution-10', ()=>{
    test("passing 'bob' to charCheck() should return B", done => {
        expect.assertions(1)
        const tst = sut.charCheck("bob")
        expect(tst).toEqual('B')
        done()
    })
    test("passing 'will' to charCheck() should return D", done => {
        expect.assertions(1)
        const tst = sut.charCheck("will")
        expect(tst).toEqual('E')
        done()
    })
    test("passing 'allen' to charCheck() should return A", done => {
        expect.assertions(1)
        const tst = sut.charCheck("allen")
        expect(tst).toEqual('A')
        done()
    })
})