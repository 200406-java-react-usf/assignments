// Check if two arrays have the same size and contents (including if content order is not the same).

// equivArr([4,2,8,4,7],[7,4,4,2,8]) = true
// equivArr([4,2,8,4,7],[7,5,4,2,8]) = false
// equivArr([4,2,8,4],[7,5,4,2,8]) = false

function equivArr(arr1, arr2){

//chekc length
    if(arr1.length != arr2.length)
        return false;

//sort the array
    arr1.sort((a,b) => a-b);
    console.log(arr1);
    arr2.sort((a,b) => a-b);
    console.log(arr2);
//match eachone
    let count = 0;
    for(var x of arr1){
        if(x != arr2[count++])
        return false;
    }
        return true;
}

console.log(equivArr([4,2,8,4,7],[7,4,4,2,8]));

module.exports = {equivArr}