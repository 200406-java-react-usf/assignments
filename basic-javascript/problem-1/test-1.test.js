const sut = require('./solution-1');

describe('solution-1', () => {

    test ('tests to see if a given year is a valid leap year', () =>{
        expect(sut.checkLeapYear(new Date())).toBeTruthy();
    });

    test ('should throw an error if a Date object is not passed in', () => {
        expect( () => {
            sut.checkLeapYear('a');
        }).toThrow();
    });

});