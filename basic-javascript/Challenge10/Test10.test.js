const sut = require ('./Challenge_10');
describe('Takes in a string as a parameter. It must return A, B, C, D, or E', () => {
    test('Should validate and return A', () => {
            expect(sut("alien 1 always")).toBe('A');
    });
    test('Should validate and return B', () => {
        expect(sut("care 1 always")).toBe('B');
});
test('Should validate and return C', () => {
    expect(sut("love always")).toBe('C');
});
test('Should validate and return D', () => {
    expect(sut("soul food")).toBe('D');
});

test('Should validate and return E', () => {
    expect(sut("won the lottery")).toBe('E');
});
});