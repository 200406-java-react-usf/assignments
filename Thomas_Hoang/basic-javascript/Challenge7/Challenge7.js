//Write a function that takes in a number and returns the corresponding value of the Fibonacci sequence.

function fibonnacci(n){
    let sequence = [n]
    sequence[0] = 1
    sequence[1] = 1

    for(i = 2; i < n; i ++){
    sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return(sequence[n])
}

fibonnacci(5)
