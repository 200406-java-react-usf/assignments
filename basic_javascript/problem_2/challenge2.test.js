const sut = require("./challenge2");

const testingTrue = ['jeremy2975@yahoo.com', 'jelam2975@gmail.org', 'deaglecustom@gmail.edu', 'testing@testing.gov'];
const testingFalse = ["tennis", 'jeremyymail.com', "2", 'jeremy@ymail', " "];
const testingInvalid = [3, null, undefined, false];

for (let i = 0; i < testingTrue.length; i++) {
    test("all of these results will test true", () => {
        expect(sut.verifyEmail(testingTrue[i])).toBe(true)
    })
}
for (let i = 0; i < testingFalse.length; i++) {
    test("all of these results will test false", () => {
        expect(sut.verifyEmail(testingFalse[i])).toBe(false)
    })
}
for (let i = 0; i < testingInvalid.length; i++) {
    test("all of these results will test false", () => {
        expect(sut.verifyEmail(testingInvalid[i])).toBe('input is invalid')
    })
}