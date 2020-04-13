/*
Check if two arrays have the same size and 
contents (including if content order is not the same).

	equivArr([4,2,8,4,7],[7,4,4,2,8]) = true
equivArr([4,2,8,4,7],[7,5,4,2,8]) = false
equivArr([4,2,8,4],[7,5,4,2,8]) = false
*/
equivArray = (arr1, arr2) => {
    if(!Array.isArray(arr1)) throw(`${arr1} is not an array`);
    if(!Array.isArray(arr2)) throw(`${arr2} is not an array`);
    if(arr1.length != arr2.length) return false;
    let check = true;
    arr1.sort();
   // return arr1;
    arr2.sort();
    //return arr2
    for(i=0; i<arr1.length; i++)
    if(arr1[i] != arr2[i]) check = false
    return check;
}
module.exports = equivArray;
//console.log(equivArray([4,2,8,4,7],[7,4,4,2,8]));
