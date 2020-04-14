const sut = require ('./Challenge_7');
describe('Find Fibonacci', () => {
    test('Fibonacci of 8 should be 21', () => {
            expect(sut(8)).toBe(21);
    });
    test('Fibonacci of 0 should be 1', () => {
        expect(sut(0)).toBe(0);
});
test('Fibonacci of 1 should be 1', () => {
    expect(sut(1)).toBe(1);
});
test('Fibonacci of 1 should be 1', () => {
    expect(sut(2)).toBe(1);
});
    test('Negative Fibonacci return -1', () => {
        expect(sut(-6)).toBe(-1);
});
});