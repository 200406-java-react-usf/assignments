/*

    Idea:
        -first check they are the same length
        -sort them in order, this way duplicates are checked
        -loop through and make sure each value is the same in each array
        -return false if one value is not the same 

*/

// let one = [4,2,8,4,7];
// let two = [7,4,4,2,8];

let equivArray = (arrayOne, arrayTwo) => {
    
    if (arrayOne.length !== arrayTwo.length) return false;

    arrayOne = arrayOne.sort();

    arrayTwo = arrayTwo.sort();


    for (var i = 0; i < arrayOne.length; i++){   

        if (arrayOne[i] !== arrayTwo[i]){

            return false;

        }
        
    }

    return true;

}
//console.log(equivArray(one,two));

module.exports = {

    equivArray

}
