const sut = require('./challenge7');

const testing = [9, 2, 5, 2, 3, 5, 13, 23];
const results = [34, 1, 5, 1, 2, 5, 233, 28657];
const errors = [null, "this is a test", "test", [43, 2, 3, 4, 2, 4], undefined];

for (let i = 0; i < testing.length; i++) {
    test("This will print out the Fibonacci sequence", () => {
        expect(sut.findFib(testing[i])).toBe(results[i]);
    })
}

for (let i = 0; i < errors.length; i++) {
    test('This will print out error message', () => {
        expect(sut.findFib(errors[i])).toBe("Please give a valid number");
    })
}