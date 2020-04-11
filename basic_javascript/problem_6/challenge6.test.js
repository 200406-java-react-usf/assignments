const sut = require('./challenge6');

test("Will output correct information when it is given a string", () => {
    expect(sut.getVowels(`going to test how this works`))
})

test("Will throw error message because a string wasn't given", () => {
    expect(sut.getVowels(7))
})
test("Will throw error message because a string wasn't given", () => {
    expect(sut.getVowels(null))
})
test("Will throw error message because a string wasn't given", () => {
    expect(sut.getVowels('object'))
})