const sut = require('./challenge6');

test('The test with JLLPR should return 0 vowels', () => 
{
    expect(sut.countVowels('JLLPR')).toBe(0);
});

test('The test with HelloWorld should return 3 vowels', () => 
{
    expect(sut.countVowels('HelloWorld')).toBe(3);
});

test('The test with UnitedStates should return 5 vowels', () => 
{
    expect(sut.countVowels('UnitedStates')).toBe(5);
});

test('The test with yeiiiii should return 6 vowels', () => 
{
    expect(sut.countVowels('yeiiiii')).toBe(6);
});
