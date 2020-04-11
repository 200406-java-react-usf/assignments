const sut = require('./challenge1');


test('finds if the given date is a leap year', () => {
    expect(sut.leapYear('April 20,2020')).toBe(true);
});

test('finds if the given date is a leap year', () => {
    expect(sut.leapYear('April 20,2019')).toBe(false);
});