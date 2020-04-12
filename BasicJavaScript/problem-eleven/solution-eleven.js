/*

    Idea:
        -first check they are the same length
        -loop through first array input, and use .includes to see if the value is contained in the other

*/

let one = [4,2,8,5,7];
let two = [7,4,4,2,8];

let equivArray = (arrayOne, arrayTwo) => {
    
    if (arrayOne.length !== arrayTwo.length) throw new Error('Arrays are two different sizes');

    let boolArray = [];

    for (var i = 0; i < arrayOne.length; i++){   

        boolArray.push(arrayTwo.includes(arrayOne[i]));
        
    }

    for (var j = 0; j < boolArray.length; j++){

        if (boolArray[j] === false){

            return false;
            break;

        }

    }

    return true;

}
console.log(equivArray(one,two));