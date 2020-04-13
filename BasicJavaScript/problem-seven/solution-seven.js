/*
    Fibonacci - F(n) = F(n-1) + F(n-2)
        -takes a number, adds the two previous values before it.

    want to take in an input value, and return the matching value in the Fib seq
        -indexes start at 0
        -so if input = 8, return 21 (0,1,1,2,3,5,8,21), here 21 is the 8th value
        -do NOT just make the array a long string, and hope it will be "enough" values
    Idea:
        -make an array of the sequence, return the array[input]
        -use a for loop to make an array of length = input
        -inside loop, create the values of the array using formula above
*/

//let inputValue = 8;

let fibSequence = (input) => {

    if (typeof input !== 'number') throw Error('Please enter a number');

    //need to specify the first two values since they will be added together in .push
    let fibArray = [0,1];

    if(input < 0){
        return -1;
    }

    if(input === 0){
        return fibArray[0];
    }

    if (input === 1){
        return fibArray[1];
    }

    //loop needs to start at two since we have first and second values already
    // need to add one to input since the first term is really the "0th" term
    for (var i = 2; i < input+1; i++){

        fibArray.push(fibArray[i-1]+fibArray[i-2]);

    }
    //return the last value of the array
    return fibArray[fibArray.length-1];

}

module.exports = {

    fibSequence

}

//console.log(fibSequence(inputValue));