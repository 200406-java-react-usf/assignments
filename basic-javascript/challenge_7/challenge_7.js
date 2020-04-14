/**Basic JavaScript Challenge 7
* 
* by Kennedy Wandelt
* 
* Contains a function which takes in a number ant return the corrresponding number of the fibonacci sequence
**/

function getFibonacci(userNum) {
    if(typeof(userNum) != "number" || !Number.isInteger(userNum)) throw new Error("Input was not an integer");

    let fibArray = [0,1];
    //let fibArrayNeg = [0, -1];

    // creating a fibonacci array up to desired value if positive
    if (userNum > 0) {
        for (i = 2; i < userNum; i++) {
            fibArray[i] = fibArray[i-2] + fibArray[i-1];
        }    
    }
    
    //dealing with negative numbers

    //if you want to return a bad value (-1)
    else if (userNum < 0) {
        return (-1);
    }

    //if you want to do negative fibonacci uncomment the following and fibArrayNeg above
    /*
    else if (userNum < -1) {
        for (j = 2; j < Math.abs(userNum); j++) {
            fibArrayNeg[j] = fibArrayNeg[j-2] + fibArrayNeg[j-1];
        }
    }
    */
    return fibArray[fibArray.length - 1];
}

module.exports = {
    getFibonacci
}