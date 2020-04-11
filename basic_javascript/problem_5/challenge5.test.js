const sut = require('./challenge5');

test("this will receive correct parameters and out an answer", () => {
    expect(sut.caesarShift("WXYZ", 4))
})

test("this will give error message stating that wrong parameters were given.", () => {
    expect(sut.caesarShift(4, "WXYZ"))
})

test("this will give error message stating that wrong parameters were given.", () => {
    expect(sut.caesarShift())
})