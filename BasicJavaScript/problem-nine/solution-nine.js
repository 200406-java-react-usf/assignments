/*

    Function to find the longest string in a given array of string and return that index

    Idea:
        -let first element be the longest
        -loop through and compare the length to the max
        -if the compared string is longer than the max, make that the max


*/

//let givenArray = ['My','Last','Name','Is','Wagenheim','My','First','Name','Is','Kevin'];

const findLongestString = (array) => {

    let maxLength = array[0];

    for (var i = 0; i < array.length; i++){

        if(array[i].length > maxLength.length){

            maxLength = array[i];

        }

    }

    return array.indexOf(maxLength);

}

module.exports = {

    findLongestString

}

//console.log(findLongestString(givenArray));