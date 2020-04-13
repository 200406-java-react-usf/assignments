//Write a function that adds the values of arrays, even if the arrays are different sizes. 
array2 = [0 , 1, 2, 3, 4, 5]
array1 = [1, 2, 3]
function differentSizeArrayAdd(arr1, arr2){
    if (arr1.length == arr2.length) throw Error('The arrays are the same size')
    //Reorginizes the arrays so that array 1 is always longer than array 2
    if (arr1.length < arr2.length){
        let tempArr = arr1
        arr1 = arr2
        arr2 = tempArr
    }
    
    for (i = 0;i < arr1.length;i++)
        if (i < arr2.length){
            arr1[i] = arr1[i] + arr2[i]
        }
        return(arr1)
}

differentSizeArrayAdd(array1, array2)
module.exports = differentSizeArrayAdd;