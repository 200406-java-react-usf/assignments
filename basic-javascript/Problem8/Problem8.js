/**
 * Write a function that adds the values of arrays, 
 * even if the arrays are different sizes.
 */

const addArrays = function(arr1, arr2) {
     var iterations;
     var arr3 = [];
     //this way we can assume that arr1 is always longer or the array lengths are equivalent.
     if (arr1.length < arr2.length) {
         arr3 = addArrays(arr2, arr1);
     } else {
        for (let i = 0; i < arr2.length; i++) {
            arr3.push(arr1[i]+arr2[i]);
        }
        for (let i = arr2.length; i < arr1.length; i++) {
            arr3.push(arr1[i]);
        }
     }
     return arr3;
}

module.exports = {
    addArrays
};

arr1 = [1,2,3,5,3];
arr2 = [3,2,1];

console.log(addArrays(arr1, arr2));
 