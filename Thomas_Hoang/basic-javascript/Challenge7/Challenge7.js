//Write a function that takes in a number and returns the corresponding value of the Fibonacci sequence.

function fibonnacci(n){
    let sequence = []
    sequence[0] = 1
    sequence[1] = 1

    for(i = 0; i < n + 1; i ++){
        console.log(i)
    sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    console.log(sequence[1 - 1])
}

fibonnacci(1)
