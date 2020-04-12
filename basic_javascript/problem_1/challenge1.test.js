const sut = require('./challenge1');

const testing = ['04/24/1804', '04/24/2020', '04/24/2016', '04/24/2072',
    '04/24/2012', '04/24/2080'
]
const falseTesting = ['04/24/1803', '04/24/2019', '04/24/2015', '04/24/2014',
    '04/24/2010', '04/24/2081'
]

const inputTesting = [1804, 2020, 2016, 2072, 2012, 2080]
const formatTesting = ['April 20, 2020', '11-24-2019', '2020-24-11']

for (let i = 0; i < testing.length; i++) {
    test('finds if the given date is a leap year', () => {
        expect(sut.leapYear(testing[i])).toBe(true);
    })
};

for (let i = 0; i < falseTesting.length; i++) {
    test('Confirms given year is not a leap year', () => {
        expect(sut.leapYear(falseTesting[i])).toBe(false);
    })
};

for (let i = 0; i < falseTesting.length; i++) {
    test('testing error message', () => {
        expect(sut.leapYear(inputTesting[i])).toBe(`Please provide a string with a date format of "mm/dd/yyyy"`);
    })
};

for (let i = 0; i < formatTesting.length; i++) {
    test('testing error message', () => {
        expect(sut.leapYear(formatTesting[i])).toBe(`Please Provide date formate in "mm/dd/yyyy"`);
    })
};