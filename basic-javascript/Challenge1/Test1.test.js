const sut = require ('./Challenge_1');
describe('leapYear', () => {
    test('2016 should validate as leap year is true', () => {
            expect(sut(2016)).toBe(true);
    });

    test('2013 should validate as leap year is false', () => {
            expect(sut(2013)).toBe(false);
    });
});