//Write a function that adds the values of arrays, even if the arrays are different sizes. 
array1 = [0 , 1, 2, 3, 4, 5]
array2 = [1, 2, 3]
function differentSizeArrayAdd(array1, array2){
    for (i = 0;i < array1.length;i++)
        if (i < array2.length){
            array1[i] = array1[i] + array2[i]
        }
        return array1;
}

differentSizeArrayAdd(array1, array2)
