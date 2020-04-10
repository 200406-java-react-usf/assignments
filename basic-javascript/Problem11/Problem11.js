/**
 * Check if two arrays have the same size and contents 
 * (including if content order is not the same).
 */

function equivArr(arr1, arr2) {
    let equi = true;
    if (arr1.length == arr2.length) {
        arr1.sort();
        arr2.sort();
        console.log(arr1, arr2);
        for (let i = 0; i < arr1.length; i++) {
            if (!(arr1[i] == arr2[i])) {
                console.log(i);
                equi = false;
                break;
            }
        }
    } else {
        equi = false;
    }
    return equi;
}

console.log(equivArr([4,2,8,4,7],[7,4,4,2,8]));
console.log(equivArr([4,2,8,4,7],[7,5,4,2,8]));
console.log(equivArr([4,2,8,4],[7,5,4,2,8]));