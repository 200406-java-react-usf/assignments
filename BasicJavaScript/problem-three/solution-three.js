// String you want to remove a char from
var randomString = 'My String';

//specified position you want the char removed from
var deleteThisChar = 3;

function deleteTheChar(input, position){

    var partOne = randomString.slice(0,position);

    var partTwo = randomString.slice(position+1, input.length);

    return partOne + partTwo;

}    
console.log(deleteTheChar(randomString,deleteThisChar));

