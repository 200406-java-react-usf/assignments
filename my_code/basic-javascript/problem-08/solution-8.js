/*
    Basic JavaScript Assignment
    Problem #08

    Korey Keipe

    8.) Write a function that adds the values of arrays, even if the arrays are different sizes.
        addArr([1,2,3], [3,2,1]) = [4,4,4]
	    addArr([1,2,3,4,5], [1,2,3]) = [2,4,6,4,5]
*/

function arrayAdd(array1,array2){

    let maxLength = Math.max(array1.length,array2.length);
    let arraySum = [];

    for (x=0;x<maxLength;x++){
        if(array1[x]==null)array1[x]=0;
        if(array2[x]==null)array2[x]=0;
        sumArray = array1[x]+array2[x];
        arraySum.push(sumArray)
    }
    return arraySum;   
}
arrayAdd([1,2,3],[3,2,1]);
arrayAdd([1,2,3,4,5],[1,2,3]);

module.exports = arrayAdd;
