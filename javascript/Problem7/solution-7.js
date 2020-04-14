/**
 * JavaScript Assignment #7
 * By: Mohamed Aboulela
 * Purpose: Write a function that takes in a number and returns the corresponding value of the Fibonacci sequence.
 */

function fibb (n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

console.log(fibb(-3)); //1
console.log(fibb(3)); //2
console.log(fibb(8));//21
console.log(fibb(2));//1
console.log(fibb(0));//0


module.exports = 
    fibb;
