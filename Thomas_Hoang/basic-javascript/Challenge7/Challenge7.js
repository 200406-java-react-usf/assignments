//Write a function that takes in a number and returns the corresponding value of the Fibonacci sequence.

function fibonnacci(n){
    let sequence = [n]
    if (n < 2) return 1

    let newNum = 0
    let num1 = 1
    let num2 = 1
    for(i = 2; i <= n; i++){
    newNum =  num1 + num2
    //Sets the numbers to the next 2 values in the sequence
    num2 = num1
    num1 = newNum
    
    }
    return(newNum)
}

//fibonnacci(4)
module.exports = fibonnacci;