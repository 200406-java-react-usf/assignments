// Write a function that adds the values of arrays, even if the arrays are different sizes. 

// 	addArr([1,2,3], [3,2,1]) = [4,4,4]
// 	addArr([1,2,3,4,5], [1,2,3]) = [2,4,6,4,5]

function addArray(ar1,ar2){
    let newArray = [];
    let loop = ar1.length>ar2.length?ar1.length:ar2.length;


    for(var i=0; i<loop; i++){
        if(!ar1[i])
            ar1.push(0);
        if(!ar2[i])
            ar2.push(0);
        newArray.push(ar1[i]+ar2[i]);
    }

    return newArray;
}

console.log(addArray([1,2,3,4],[3,2,1]));

module.exports = {addArray}