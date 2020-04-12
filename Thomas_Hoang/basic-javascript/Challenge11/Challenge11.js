//Check if two arrays have the same size and contents (including if content order is not the same).
arr1 = [1, 2, 3]
arr2 = [3, 2, 1]
function checkArrays(array1, array2){
    let isTrue = true
    //Determines if the arrays are the same size
    if (array1.length !== array2.length){
        isTrue = false
    }
    for(i = 0; i < array1.length; i++){
        //Checks 1 number against the others whole array contents
        isTrue = array1.includes(array2[i])

        if (isTrue === false){
            return(isTrue)
        }else if ((i = array1.length) && isTrue === true){
            return(isTrue)
            }
        }
    console.log(isTrue)
}
checkArrays(arr1, arr2)