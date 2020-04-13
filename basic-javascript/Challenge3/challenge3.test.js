const sut = require ('./challenge3');

test('The string revature at index 5 should return Revaure', () => 
{
    expect(sut.removeChar('Revature', 5)).toBe('Revaure');
})

test('The string revature at index 1 should return evature', () => 
{
    expect(sut.removeChar('Revature', 1)).toBe('evature');
})

test('The string revature at index 8 should return Revatur', () => 
{
    expect(sut.removeChar('Revature', 8)).toBe('Revatur');
})

test('The string revature at index 0 should return an Error', () => 
{
    expect(sut.removeChar('Revature', 0)).toMatch('Oh no, you gave me bad data');
})

test('The string revature at index 10 should return an Error', () => 
{
    expect(sut.removeChar('Revature', 10)).toMatch('Oh no, you gave me bad data');
})
