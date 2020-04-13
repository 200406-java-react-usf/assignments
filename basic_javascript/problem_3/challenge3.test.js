const sut = require('./challenge3')



test("Removes character in a given spot", () => {
    expect(sut.removeChar("jeremy is very cool", 18))
});

test("suppose to return error message", () => {
    expect(sut.removeChar("jeremy is very cool", 20))
});

test("suppose to return error message ", () => {
    expect(sut.removeChar(20, "jeremy is very cool"))
});