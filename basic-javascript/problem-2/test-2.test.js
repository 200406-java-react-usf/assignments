const sut = require('./solution-2');

describe('solution-2', () => {

    test('should return true if the email is valid', () => {

        expect(sut.validateEmail('test@test.test')).toBeTruthy();
    });

    test('should throw an error if nothing was sent as parameter', () => {

        expect ( () => {
            sut.validateEmail('');
        }).toThrow('You did not send me anything');

    });

    test('should throw an error if non-string value was passed', () => {

        expect ( () => {
            sut.validateEmail(3);
        }).toThrow('You did not send me a valid email address');
    })

});