// const LeapYear = require('./index');

// describe('', () => {
//     test('', () => {
//         expect().toBe();
//     });
//     test('', () => {
//         expect().toBe();
//     });
//     test('', () => {
//         expect().toBe();
//     });
// })

const LeapYear = require('./index');

describe('LeapYear', () => {
    test('should expect 01/01/2000 to be leap year', () => {
        expect(LeapYear(new Date(2000, 1, 1))).toBe(true);
    });
    test('should expect 01/01/2019 to not be a leap year', () => {
        expect(LeapYear(new Date(2019, 1, 1))).toBe(false);
    });
    test('should expect a string to not be a valid date object', () => {
        expect(LeapYear('hello')).toBe('No valid Date Object');
    });
})
