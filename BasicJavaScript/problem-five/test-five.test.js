const sut = require('./solution-five');

describe('take in a string and an encryption key value, and return the caesar encryption of that string', () => {

    test('testing abc with shift of 3, should return def', () => {

        expect(sut.ceasarEncrypt('abc',3)).toBe('def');

    });

    test('testing abc with shift of 5, should return def', () => {

        expect(sut.ceasarEncrypt('abc',5)).toBe('fgh');

    });

    test('testing kevin with shift of 5, should return def', () => {

        expect(sut.ceasarEncrypt('kevin',5)).toBe('pjans');

    });

    test('testing zoom with shift of 5, should return def', () => {

        expect(sut.ceasarEncrypt('zoom',5)).toBe('ettr');

    });


});