const sut = require('./challenge1');

describe('challenge_1', () => {

    test('should return leap year == true when year is divisible by 400', () => {
        expect(sut.leapYear(new Date('01/01/2000'))).toBeTruthy();                                      
    });

    test('Should return false if the year is divisible by 100 but not by 400', () =>{
       expect(sut.leapYear(new Date('01/01/1999'))).toBeFalsy();
    })
    
    test('Should return wrong input if input is not date format', () => {
        expect(() => {
            sut.leapYear('3335555');
        }).toThrow();
    });
});
