const sut = require('./Problem1'); //system under test = sut

describe('Problem1', () => {
    
    test('should return true or false depending on whether or' + 
            'not a date given is on a leap year', done => {
        expect.assertions(10);
        let date1 = new Date("October 1, 1999 22:02:05");
        let date2 = new Date("October 1, 2000 22:02:05");
        let date3 = new Date("October 1, 2001 22:02:05");
        let date4 = new Date("October 1, 2100 22:02:05");
        let date5 = new Date(2003, 11, 17);
        let date6 = new Date(2004, 11, 17);
        let date7 = new Date(2200, 11, 17, 3, 24, 0);
        let date8 = new Date(2204, 11, 17, 3, 24, 0);
        let date9 = "October 1, 2100";
        let date10 = 123;
        expect(sut.leapYear(date1)).toBe(false);
        expect(sut.leapYear(date2)).toBe(true);
        expect(sut.leapYear(date3)).toBe(false);
        expect(sut.leapYear(date4)).toBe(false);
        expect(sut.leapYear(date5)).toBe(false);
        expect(sut.leapYear(date6)).toBe(true);
        expect(sut.leapYear(date7)).toBe(false);
        expect(sut.leapYear(date8)).toBe(true);
        expect((date9) => {
            sut.leapYear(date9);
        }).toThrow();
        expect((date10) => {
            sut.leapYear(date10);
        }).toThrow();
        done();
    });

});