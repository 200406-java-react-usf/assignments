const sut = require ('./challenge2');

test('The email format jangelesf01@gmail.com should be valid', () => 
{
    expect(sut.validateEmail('jangelesf01@gmail.com')).toBe(true);
});

test('The email format j.angeles@gmail.org should be valid', () => 
{
    expect(sut.validateEmail('j.angeles@gmail.org')).toBe(true);
});

test('The email format jangelesf01@gmail.me.net should be valid', () => 
{
    expect(sut.validateEmail('jangelesf01@gmail.me.net')).toBe(true);
});

test('The email format jangelesf01.gmail.com should be invalid', () => 
{
    expect(sut.validateEmail('jangelesf01.gmail.com')).toBe(false);
});

test('The email format jangelesf01@.gmail.com should be invalid', () => 
{
    expect(sut.validateEmail('jangelesf01@.gmail.com')).toBe(false);
});

test('The email format @gmail.com should be invalid', () => 
{
    expect(sut.validateEmail('@gmail.com')).toBe(false);
});

test('The email format jangelesf01@gmail.b should be invalid', () => 
{
    expect(sut.validateEmail('jangelesf01@gmail.b')).toBe(false);
});

test('The email format .jangelesf01.gmail.com should be invalid', () => 
{
    expect(sut.validateEmail('.jangelesf01.gmail.com')).toBe(false);
});

test('The email format jangelesf01()*@gmail.com should be invalid', () => 
{
    expect(sut.validateEmail('jangelesf01()*@gmail.com')).toBe(false);
});

test('The email format jangelesf..112@gmail.com should be invalid', () => 
{
    expect(sut.validateEmail('jangelesf..112@gmail.com')).toBe(false);
});