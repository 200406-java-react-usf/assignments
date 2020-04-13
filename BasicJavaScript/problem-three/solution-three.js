// String you want to remove a char from
//var randomString = 'My name is Kevin';

//specified position you want the char removed from
//var deleteThisChar = 7;

function deleteTheChar(input, position){

    if(typeof input !== 'string') throw Error('Please enter a valid string');
    if(typeof position !== 'number') throw Error('Please enter a valid number for the position');

    var partOne = input.slice(0,position);

    var partTwo = input.slice(position+1, input.length);

    return partOne + partTwo;

}    
//console.log(deleteTheChar(randomString,deleteThisChar));

module.exports = {

    deleteTheChar

}

