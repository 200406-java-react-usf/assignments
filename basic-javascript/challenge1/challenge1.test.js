const sut = require('./challenge1');

describe('challenge_1', () => {

    test('should return leap year == true when year is divisible by 400', () => {
        sut.leapYear(new Date('01/01/2000'), () => {
            expect(sut.isLeap).toBeTruthy();                        
        });        
    });

    test('Should return false if the year is divisible by 100 but not by 400', () =>{
        sut.leapYear(new Date('01/01/1999'), () => {
            expect(sut.isLeap).toBeFalsy();
        })
    })
    
    test('Should return wrong input if input is not date format', () => {
        sut.leapYear('33665555', () => {
            expect('wrong input format, please provide a date');
        })
    })
});
