const sut = require ('./challenge1');

test('properly return true for leap year 1904', () => 
{
    expect(sut.isLeapYear('1904')).toBe(true);
});


test('properly return true for leap year 1988', () => 
{
    expect(sut.isLeapYear('1988')).toBe(true);
});

test('properly return true for leap year 1600', () => 
{
    expect(sut.isLeapYear('1600')).toBe(true);
});

test('properly return true for leap year 2000', () => 
{
    expect(sut.isLeapYear('2000')).toBe(true);
});


test('properly return true for leap year 2020', () => 
{
    expect(sut.isLeapYear('2020')).toBe(true);
});

test('properly return false for leap year 1914', () => 
{
    expect(sut.isLeapYear('1914')).toBe(false);
});

test('properly return false for leap year 1946', () => 
{
    expect(sut.isLeapYear('1946')).toBe(false);
});

test('properly return false for leap year 1978', () => 
{
    expect(sut.isLeapYear('1978')).toBe(false);
});

test('properly return false for leap year 1800', () => 
{
    expect(sut.isLeapYear('1800')).toBe(false);
});

test('properly return false for leap year 2014', () => 
{
    expect(sut.isLeapYear('2014')).toBe(false);
});

