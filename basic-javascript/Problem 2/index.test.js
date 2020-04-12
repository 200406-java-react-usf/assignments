const emailChecker = require('./index');

describe('Email', () => {
    test('should expect email address to not be valid',() => {
        expect(emailChecker('jdvalencia1994hotmail.com')).toBe("You have an invalid email");
    })
    test('should expect email address to be valid',() => {
        expect(emailChecker('jdvalencia.1994@hotmail.com')).toBe("Valid Email!");
    })
    test('should expect email address to not have a valid domain name',() => {
        expect(emailChecker('jdvalencia.1994@hotmail.com.')).toBe("invalid email(domain)");
    })
})