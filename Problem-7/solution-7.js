/*Write a function that takes in a number and returns the corresponding value of the Fibonacci sequence.

fibonacci(-3) = -1
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1
fibonacci(8) = 21
*/
function fibonacci(num){
    var fibonacci = 0;
    var current = 0;
    var next = 1;
    if(num == 1)
        return 1;
    for(var i = 1; (i < num); i++){
        fibonacci = current + next;
        current = next;
        next = fibonacci;
    }

    return fibonacci;
}
//fibonacci(8) = 21
console.log(fibonacci(8));
//fibonacci(0) = 0
console.log(fibonacci(0));
//fibonacci(1) = 1
console.log(fibonacci(1));
//fibonacci(2) = 1
console.log(fibonacci(2));
//fibonacci(4) = 3
console.log(fibonacci(4))