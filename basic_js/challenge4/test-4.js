const sut = require('./solution-4');

test("Will output correct information when it is given", () => {
    expect(sut.testSearch("you are the best test Test ez as pie"))
})

test("Will throw error message because a string wasn't given", () => {
    expect(sut.testSearch(null))
})

test("Will throw error message because a string wasn't given", () => {
    expect(sut.testSearch(8))
})