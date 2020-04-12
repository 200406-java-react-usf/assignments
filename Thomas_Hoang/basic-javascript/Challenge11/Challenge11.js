//Check if two arrays have the same size and contents (including if content order is not the same).
arr1 = [1, 2, 3]
arr2 = [3, 2, 1]
function checkArrays(array1, array2){
    const isTrue = true
    if (array1.length !== array2.length){
        isTrue = false
    }
    return(isTrue)
}
checkArrays(arr1, arr2)