const sut = require ('./Challenge_6');
describe('Count vowels from String', () => {
    test('Should have vowels', () => {
            expect(sut("Let us know")).toBe(3);
    });
});