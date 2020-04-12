/**
 * Check if two arrays have the same size and contents 
 * (including if content order is not the same).
 */

const equivArr = function(arr1, arr2) {
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

module.exports = {
    equivArr
};
