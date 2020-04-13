
/* Write a function that takes in a number 
   and returns the corresponding value
   of the Fibonacci sequence.

fibonacci(-3) = -1
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(8) = 21 
 */

 myFib = (n) => {
    let fib = [0, 1];
    //throwing error if input is not a number
    if (typeof n != 'number') throw(`${n} is not a number`);
    //returning -1 if input is less than 0
    if(n<0) return -1;
   // console.log(myFib(n))
   // finding the value of the fib series at the requested sequence
   for (i=2; i<=n; i++){
      fib[i] = fib[i-2] + fib[i-1];
   }
   //returning requested number
   return fib[n]; 
 }
 module.exports = {
    myFib
 }
 //console.log(myFib(8))


