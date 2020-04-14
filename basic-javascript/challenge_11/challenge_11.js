/**Basic JavaScript Challenge 11
* 
* by Kennedy Wandelt
* 
* A function which checks if two arrays have the same size and contents (including if content order is not the same).
**/

const compareArrays = (array1, array2) => {
    // are the arguments that were passed in arrays
    if(!Array.isArray(array1) || !Array.isArray(array2)) throw new Error("At least one of the arguments was not an array")

    //are the arrays the same size
    if (array1.length != array2.length) {
        return false;
    }
    //sort array to check for same contents number by number
    else {
        array1 = array1.sort();
        array2 = array2.sort();
        for (i = 0; i < array1.length; i++) {

            //is this item the same on each array?
            if (array1[i] != array2[i]) {
                return false;
            }
            else{
                continue;
            } 
        }
    }
    //if it makes it through everything then return true
    return true;
}

module.exports = {
    compareArrays
}