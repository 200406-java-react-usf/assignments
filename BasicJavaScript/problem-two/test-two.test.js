const sut = require('./solution-two');


describe('testing the email validation func', () => {

    test('should return true, valid email', () =>{

        let givenRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let inputEmail = 'wagenheimk@me.com';

        expect(sut.testEmailFunction(givenRegEx,inputEmail)).toBe(true);

    });

    test('should return false, personal info ends with 2 dots', () =>{

        let givenRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let inputEmail = 'wagenheimk..@me.com';

        expect(sut.testEmailFunction(givenRegEx,inputEmail)).toBe(false);

    });

    test('should return false, no @ symbol', () =>{

        let givenRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let inputEmail = 'wagenheimk.me.com';

        expect(sut.testEmailFunction(givenRegEx,inputEmail)).toBe(false);

    });

    test('inputting a number to test thrown error', () =>{

        let givenRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let inputEmail = 5;

        expect(() => {sut.testEmailFunction(givenRegEx,inputEmail)}).toThrow();

    });



});