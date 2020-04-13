const sut = require('./challenge7');

test('Fibonacci series test of -3 should return -1', () => 
{
    // is it really supposed to be -1?
    expect(sut.fib(-3)).toBe(-1);
});

test('Fibonacci series test of 0 should return 0', () => 
{
    expect(sut.fib(0)).toBe(0);
});

test('Fibonacci series test of 1 should return 1', () => 
{
    expect(sut.fib(1)).toBe(1);
});

test('Fibonacci series test of 2 should return 1', () => 
{
    expect(sut.fib(2)).toBe(1);
});

test('Fibonacci series test of 8 should return 21', () => 
{
    expect(sut.fib(8)).toBe(21);
});