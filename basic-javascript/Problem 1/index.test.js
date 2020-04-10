const LeapYear = require('./index');

test('checks if 01/01/2000 is a leap year', () => {
    expect(LeapYear(new Date(2000,1,1))).toBe(true);
});