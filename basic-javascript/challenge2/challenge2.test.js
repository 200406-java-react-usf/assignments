const sut = require('./challenge2');

describe('challenge_2', () => {
    test('Should return provided email if email is valid', () => {
        expect(sut.myValidEmail('bigmama@mlawrence.com')).toBe(true);
    });

    test('Should return You provided an invalid Email if missing @', () => {
        expect(() => {
            sut.myValidEmail('bigmamamlawrence.com');        
        }).toThrow();
    });
});

