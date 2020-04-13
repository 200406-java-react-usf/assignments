const sut = require('./challenge4');

test('The string should not return the word \'test\'', () =>
{
    expect(sut.stringPresent('hello test test test world')).toEqual(expect.not.stringContaining('test'));
});

test('The string should not return the word \'test\'', () =>
{
    expect(sut.stringPresent('hello test world test')).toEqual(expect.not.stringContaining('test'));
});

test('The string should not return the word \'test\'', () =>
{
    expect(sut.stringPresent('hello test test test')).toEqual(expect.not.stringContaining('test'));
});

test('The string should not return the word \'test\'', () =>
{
    expect(sut.stringPresent('test test test')).toEqual(expect.not.stringContaining('test'));
});

test('The string should return the original string', () =>
{
    expect(sut.stringPresent('hello world')).toEqual('hello world');
});