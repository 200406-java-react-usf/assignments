/**Basic JavaScript Challenge 6
* 
* by Kennedy Wandelt
* 
* Contains a function which accepts a string parameter and encrypts it via Caesar Shift
* Assumptions - y is not a vowel, only checking for a,e,i,o,and u
**/

function countVowels(userString) {

    if(typeof(userString) !== "string") throw new Error("Input was not a string");

    let numOfVowels = 0;
    userString = userString.toLowerCase();

    //iterate through each character and if vowel then increment
    for (i = 0; i < userString.length; i++) {
        
        let char = userString.charAt(i);

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            numOfVowels++;
        }
    }
    return numOfVowels;
}

module.exports = {
    countVowels
}