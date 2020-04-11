const leapYear = require('./solution-one');


describe('solution-one', () => {

    test('should return true b/c 2020 is a leap year', () =>{
        
        let testDate = new Date('April 11,2020');
        expect(leapYear.testForLeapYear(testDate)).toBe(true);

    });

    test('should return false b/c 1997 is not a leap year', () =>{
        
        let testDate = new Date('June 12, 1997');
        expect(leapYear.testForLeapYear(testDate)).toBe(false);

    });

    test('should return false b/c 2200 is divisible by 100, making it not a leap year', () =>{
        
        let testDate = new Date('January 1, 2200');
        expect(leapYear.testForLeapYear(testDate)).toBe(false);

    });

});