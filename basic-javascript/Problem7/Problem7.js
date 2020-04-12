/**
 * Write a function that takes in a number and returns the 
 * corresponding value of the Fibonacci sequence.
 */


//There is probably a better solution if I learn the math... 
//but this works for now
const fibanacciSequence = function (index) {
    fibonnaciArray = [0,1]
    var isNeg = false;
    if (index < 0) {
        isNeg = true;
        index = Math.abs(index);
    }
    for (let i = 1; i < index; i++) {
        fibonnaciArray.push(fibonnaciArray[i] + fibonnaciArray[i-1]);
    }
    fibAtIndex = fibonnaciArray[index];
    if (isNeg) {
        fibAtIndex = fibAtIndex*-1;
    }
    return fibAtIndex;
}

module.exports = {
    fibanacciSequence
};
