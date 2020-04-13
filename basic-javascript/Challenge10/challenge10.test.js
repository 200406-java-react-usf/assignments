const  sut = require('./challenge10');

describe('challenge10', () => 
{
    test('test for \'hello world\' should return C', () =>
    {
        expect(sut.firstChar('hello world')).toBe('C');
    });

    test('test for \'beautiful\' should return B', () =>
    {
        expect(sut.firstChar('beautiful')).toBe('B');
    });

    test('test for \'ariel\' should return A', () =>
    {
        expect(sut.firstChar('ariel')).toBe('A');
    });

    test('test for \'Ariel\' should return E', () =>
    {
        expect(sut.firstChar('Ariel')).toBe('E');
    });

    test('test for \'ARIEL\' should return E', () =>
    {
        expect(sut.firstChar('ARIEL')).toBe('E');
    });

    test('test for \'xenoh\' should return D', () =>
    {
        expect(sut.firstChar('xenoh')).toBe('D');
    });
});