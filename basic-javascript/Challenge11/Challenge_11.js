//Check if two arrays have the same size and contents (including if content order is not the same).

function equivArr(arr1, arr2)
{
 	// Check if the arrays are the same length
     if (arr1.length !== arr2.length) 
     return false;
     // Check if all items exist and are in the same order
     for (let i = 0; i < arr1.length; i++) {
         if (arr1[i] !== arr2[i]) 
         return false;
     }
     return true;
    }
    module.exports = equivArr;