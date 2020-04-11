/*
    Basic JavaScript Assignment
    Problem #11

    Korey Keipe

    11.) Check if two arrays have the same size and contents (including if content order is not the same).
        equivArr([4,2,8,4,7],[7,4,4,2,8]) = true
        equivArr([4,2,8,4,7],[7,5,4,2,8]) = false
        equivArr([4,2,8,4],[7,5,4,2,8]) = false
*/

function verifyArrayEquiv(Array1,Array2){

    let sort1 = Array1.sort();
    let sort2 = Array2.sort();
    let longArray = Math.max(Array1.length,Array2.length)

    for (x=0;x<longArray;x++){
        if (Array1[x]!=Array2[x]){
            return false;
            break; 
        }              
    }
    return true;   
}

console.log(verifyArrayEquiv([4,2,8,4,7],[7,4,4,2,8]));