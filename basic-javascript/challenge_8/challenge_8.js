/**Basic JavaScript Challenge 8
* 
* by Kennedy Wandelt
* 
* Write a function that adds the values of arrays, even if the arrays are different sizes
**/

sumArrays = (array1, array2) => {
    delta = array1.length - array2.length;
    let newArray = [];

    if(delta > 0) {
        maxLength = array1.length;
        for(i = array2.length; i < maxLength; i++) {
            array2[i] = 0
        }
    }
    else if(delta <0) {
        maxLength = array2.length;
        for(j = array1.length; j < array2.length; j++) {
            array1[j] = 0
        }
    }

    for(i = 0; i < maxLength; i++){
        newArray[i]= array1[i] + array2[i];
    }
    return newArray;
}

console.log(sumArrays([1,2,3,4], [1,1,1]));