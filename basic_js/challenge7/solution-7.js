/** 
 * Problem 7: Write a function that takes in a number 
 * and returns the corresponding value of the Fibonacci sequence.
 */

function fibonacci(input) {
    let sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;
    sequence[-1] = 1;

    if (input > 0){
        for (x = 2; x <= input; x++){
            sequence[x] = sequence[x-2] + sequence[x-1];
        }
    }
    else{
        for (x = -2; x >= input; x--){
            sequence[x] = sequence[x + 2] - sequence[x + 1];
        }
        return sequence[input];
    }
}

module.exports = fibonacci;