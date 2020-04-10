/**Basic JavaScript Challenge 11
* 
* by Kennedy Wandelt
* 
* A function which checks if two arrays have the same size and contents (including if content order is not the same).
**/

compareArrays = (array1, array2) => {
    if (array1.length != array2.length) {
        return false;
    }
    else {
        array1 = array1.sort();
        array2 = array2.sort();
        for (i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
            else{
                continue;
            } 
        }
    }
    return true;
}

console.log(compareArrays([1,2,3,4,5], [5,4,3,2]));