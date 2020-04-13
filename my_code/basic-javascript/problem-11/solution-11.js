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

    
    if (Array1.length != Array2.length){
        return false;
    }

    const sort1 = Array1.sort();
    const sort2 = Array2.sort();

    for (x=0;x<Array1.length;x++){
        
        if(sort1[x]!==sort2[x]){
            return false;            
        }           
    }
    return true;
}
console.log(verifyArrayEquiv([4,2,8,4,7],[7,4,4,2,8]));

module.exports = verifyArrayEquiv;