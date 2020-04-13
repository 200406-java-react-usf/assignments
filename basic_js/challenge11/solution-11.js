/**
 * Problem 11:  Check if two arrays have the same size and contents (including if content order is not the same).
 */

function arrCheck(arr1, arr2){

        if(arr1.length != arr2.length)
            return false;
    
        arr1.sort((a,b) => a-b)
        console.log(arr1)
        arr2.sort((a,b) => a-b)
        console.log(arr2)

        let count = 0;
        for(var x of arr1){
            if(x != arr2[count++])
            return false;
        }
            return true;
    }
    
    module.exports = {
        arrCheck
    }