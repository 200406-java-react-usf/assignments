//Write a function that takes in a number and returns the corresponding value of the Fibonacci sequence.
function Fibonacci(number){
if (number < 0)
return -1 
else if (number <= 1)
return number;
return Fibonacci(number-1) + Fibonacci(number-2);
}
module.exports = Fibonacci;
