/**
 * Write a function that adds the values of arrays, 
 * even if the arrays are different sizes.
 */

const addArrays = function(arr1, arr2) {
    if (!(Array.isArray(arr1)) || !(Array.isArray(arr2))) {
        throw new TypeError();
    }
     let iterations;
     let arr3 = [];
     //this way we can assume that arr1 is always longer or the array lengths are equivalent.
     if (arr1.length < arr2.length) {
         arr3 = addArrays(arr2, arr1);
     } else {
        for (let i = 0; i < arr2.length; i++) {
            if (!(typeof arr1[i] === "number") || !(typeof arr2[i] === "number")) {
                throw new TypeError();
            }
            arr3.push(arr1[i]+arr2[i]);
        }
        for (let i = arr2.length; i < arr1.length; i++) {
            if (!(typeof arr1[i] === "number")) {
                throw new TypeError();
            }
            arr3.push(arr1[i]);
        }
     }
     return arr3;
}


module.exports = {
    addArrays
};
 