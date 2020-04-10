/**Basic JavaScript Challenge 7
* 
* by Kennedy Wandelt
* 
* Contains a function which takes in a number ant return the corrresponding number of the fibonacci sequence
**/

function getFibonacci(userNum) {
    let fibArray = [0,1];
    let fibArrayNeg = [0, -1];


    if (userNum > 0) {
        for (i = 2; i < userNum; i++) {
            fibArray[i] = fibArray[i-2] + fibArray[i-1];
        }    
    }
    else if (userNum < -1) {
        for (j = 2; j < Math.abs(userNum); j++) {
            fibArrayNeg[j] = fibArrayNeg[j-2] + fibArrayNeg[j-1];
        }
    }
    //console.log(fibArray);
    //console.log(fibArrayNeg);
    return fibArray[fibArray.length - 1];
}

console.log(getFibonacci(-5));