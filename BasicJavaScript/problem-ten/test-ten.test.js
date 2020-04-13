const sut = require('./solution-ten');


describe('testing a string that the first char is in for each set', () => {

    test('testing in set A', () => {

        expect(sut.testFirstCharOfString('array')).toBe('A');

    });

    test('testing in set A', () => {

        expect(sut.testFirstCharOfString('beta')).toBe('B');

    });

    test('testing in set A', () => {

        expect(sut.testFirstCharOfString('hello')).toBe('C');

    });

    test('testing in set A', () => {

        expect(sut.testFirstCharOfString('test')).toBe('D');

    });

    test('testing the letter w', () => {

        expect(sut.testFirstCharOfString('what')).toBe('W is in none of these');

    });

    test('testing the thrown error', () => {

        expect(() => {sut.testFirstCharOfString(5)}).toThrow();

    });

});