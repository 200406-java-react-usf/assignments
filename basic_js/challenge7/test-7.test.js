const sut = require('./solution-7')

describe('testing if returns the corresponding value of the Fibonacci sequence', () =>{
    test('5', done =>{
        expect(sut(-4)).toBe(-3)
        done()
    })
    test('5', done =>{
        expect(sut(-5)).toBe(5)
        done()
    })
})
