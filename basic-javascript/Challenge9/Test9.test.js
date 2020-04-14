const sut = require ('./Challenge_9');
describe('find the longest string from a given array', () => {
    test('2016 should validate as leap year is true', () => {
            expect(sut(["Success", "Deterimination", "Endurance", "Drive"])).toBe(14);
    });
});