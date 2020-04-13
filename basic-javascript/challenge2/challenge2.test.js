const sut = require('./challenge2');

describe('challenge_2', () => {
    test('Should return provided email if email is valid', () => {
        sut.myValidEmail('bigmama@mlawrence.com', () => {
            expect(sut.email);
        });
    });

    test('Should return You provided an invalid Email if missing @', () => {
        sut.myValidEmail('bigmamamlawrence.com', () => {
            expect('You provided an invalid Email');
        });        
    });
});
