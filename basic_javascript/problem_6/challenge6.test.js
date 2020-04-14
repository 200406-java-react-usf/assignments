const sut = require('./challenge6');

test("Will output correct information when it is given a string", () => {
    expect(sut.getVowels(`going to test how this works`)).toBe(7)
})

test("Will throw error message because a string wasn't given", () => {
    expect(sut.getVowels(7)).toBe("Please give me a string value")
})
test("Will throw error message because a string wasn't given", () => {
    expect(sut.getVowels(null)).toBe("Please give me a string value")
})
test("Will throw error message because a string wasn't given", () => {
    expect(sut.getVowels('object')).toBe(2)
})