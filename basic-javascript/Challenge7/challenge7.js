 const fib = (n) => 
 { 
    if(n===0) return 0;
    if(n <= 2) return 1;
    if (n > 2)
    {
        return fib(n-1) + fib(n-2);
    }
    else
    {
        return Math.pow(-1, (n + 1)) * fib(Math.abs(n));
    }
 };

 module.exports = 
 {
    fib
 };