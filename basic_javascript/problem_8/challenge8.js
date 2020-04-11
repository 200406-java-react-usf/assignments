let arr1 = [1, 2, 3, 6, 9, 9, 9];
let arr2 = [4, 5, 6, 3, 5, 5, 6, 7465, 4, 55, 56, 33, 2, 4];

function addingArrays(arr1, arr2) {
    if ((typeof(arr1) != 'object') || (typeof(arr2) != 'object'))
        throw ("This is not an array, please provide an array")

    for (i = 0; i < arr1.length; i++) {
        if (typeof(arr1[i]) != 'number')
            return ("array contains string array must contain only number values")
    }


    let newArray = [];
    let bigArray;
    let smallArray;
    let max = Math.max(arr1.length, arr2.length);
    let min = Math.min(arr1.length, arr2.length);


    // check the length of each array to figure out what was the shortest array
    if (arr1.length === arr2.length) {
        bigArray = arr1;
        smallArray = arr2;
    }
    if (arr1.length > arr2.length) {
        bigArray = arr1;
        smallArray = arr2;
    }
    if (arr1.length < arr2.length) {
        bigArray = arr2;
        smallArray = arr1;
    }

    // pushed 0's into the smaller array so the smaller array will be the same size as the bigger array. 
    for (i = 0; i < max - min; i++) {
        smallArray.push(0);
    }

    // adding the two arrays together. 
    for (j = 0; j < max; j++) {
        newArray[j] = bigArray[j] + smallArray[j]

    }
    return newArray
}

module.exports = {
    addingArrays
}

console.log(addingArrays(arr1, arr2));