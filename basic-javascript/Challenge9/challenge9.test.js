const sut = require ('./challenge9');

describe ('challenge9', () => 
{
    test('test should return \'beautiful\' in array [\'hello\', \'beautiful\', \'world\']', () =>
    {
        expect(sut.longestStr(['hello', 'beautiful', 'world'])).toBe('beautiful');
    });

    test('test should return \'hello \' in array [\'hello\', \'hello \', \'hello\']', () =>
    {
        expect(sut.longestStr(['hello', 'hello ', 'hello'])).toBe('hello ');
    });

    test('test should return \'world\' in array [\'\', \'0\', \'world\']', () =>
    {
        expect(sut.longestStr(['', '0', 'world'])).toBe('world');
    });
});