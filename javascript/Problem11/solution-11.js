/**
 * JavaScript Assignment #11
 * By: Mohamed Aboulela
 * Purpose: Check if two arrays have the same size and contents (including if content order is not the same).
 */

let array1 = [4,2,8,4,7];
let array2 = [7,4,4,2,8];
let array3 = [4,2,8,4];
let array4 = [7,5,4,2,8];

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;

    const sort1 = arr1.sort();
    const sort2 = arr2.sort();
    
    for(i=0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

console.log(arraysEqual(array1, array2));
console.log(arraysEqual(array1, array4));
console.log(arraysEqual(array3, array4));

module.exports = 
    arraysEqual;