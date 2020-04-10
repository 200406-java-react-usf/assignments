let arr1 = [1, 2, 3, 6, 9, 9, 9];
let arr2 = [4, 5, 6, 3, 5, 5, 6, 7465, 4, 55, 56, 33, 2, 4];



function addingArrays(arr1, arr2) {
    if ((typeof(arr1) != 'object') || (typeof(arr2) != 'object'))
        throw ("This is not an array, please provide an array")
    let max = Math.max(arr1.length, arr2.length);
    let min = Math.min(arr1.length, arr2.length);

    let newArray = [];

    let bigArray;
    let smallArray;

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

    for (i = 0; i < max - min; i++) {
        smallArray.push(0);
    }


    for (j = 0; j < max; j++) {
        newArray[j] = bigArray[j] + smallArray[j]

    }
    return newArray
}

console.log(addingArrays(arr1, arr2));